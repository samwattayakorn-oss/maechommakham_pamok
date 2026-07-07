const BANK_ACCOUNT = {name:"น.ส.ช่อมะขาม ธ.กสิกร", number:"123-4-56789-0"};

MataMan.showCheckout = () => { // [แก้1] เปลี่ยนชื่อให้ตรง m002
  const items = MataMan.cart.filter(i=>i.checked);
  if(!items.length) return alert('เลือกสินค้าก่อน');
  
  const subtotal = items.reduce((a,b)=>a+b.price*b.qty,0);
  const total = subtotal + MataMan.ship;
  const isMember = !!MataMan.currentUser; // [เพิ่ม] เช็คสมาชิก

  document.getElementById('modalRoot').innerHTML = `
  <div class="modal active">
    <div class="box">
      <h2>ยืนยันคำสั่งซื้อครั้งสุดท้าย</h2>
      <div style="margin-bottom:10px">สถานะ: <b style="color:var(--gold)">${isMember?'สมาชิก':'ผู้เยี่ยมชม'}</b></div> <!-- [เพิ่ม] โชว์สถานะ -->
      ${items.map(i=>`${i.name} x${i.qty} = ${i.price*i.qty}฿`).join('<br>')}<hr>
      ค่าส่ง: ${MataMan.ship} ฿<br><b>รวม: ${total} ฿</b><br><br>
      <h3>บัญชีผู้รับเงิน</h3>
      <div style="background:#333;padding:10px;border-radius:6px">${BANK_ACCOUNT.name}<br>เลขที่: ${BANK_ACCOUNT.number}</div><br>
      <input id="name" placeholder="ชื่อ-สกุล" value="${isMember?MataMan.currentUser.name:''}" style="width:100%;padding:8px;margin:5px 0;background:#333;color:#fff;border:1px solid #444;border-radius:6px"> <!-- [เพิ่ม] ดึงชื่อ -->
      <input id="addr" placeholder="ที่อยู่จัดส่ง" value="${isMember?MataMan.currentUser.addr:''}" style="width:100%;padding:8px;margin:5px 0;background:#333;color:#fff;border:1px solid #444;border-radius:6px"> <!-- [เพิ่ม] ดึงที่อยู่ -->
      <button style="width:100%;padding:10px;margin-top:10px;background:var(--gold);color:#000;border:none;border-radius:6px;font-weight:bold" onclick="MataMan.confirmOrder(${total})">ยืนยัน จัดส่งเลย</button>
      <button style="width:100%;padding:10px;margin-top:5px;background:#333;color:#fff;border:none;border-radius:6px" onclick="document.getElementById('modalRoot').innerHTML=''">ย้อนกลับ</button>
    </div>
  </div>`;
}

MataMan.confirmOrder = (total) => {
  const name = document.getElementById('name').value || '-';
  const addr = document.getElementById('addr').value || '-';
  const items = MataMan.cart.filter(i=>i.checked);
  const subtotal = items.reduce((a,b)=>a+b.price*b.qty,0);
  const type = MataMan.currentUser ? 'member' : 'guest'; // [แก้2] สำคัญสุด ส่งจริง
  
  const data = {name, addr, items, subtotal, ship: MataMan.ship, total, type};
  saveOrderToAdmin(data);
  
  alert(`ส่งออเดอร์ ${total}฿ ให้แอดมินแล้ว ✅`);
  MataMan.clearCart();
  document.getElementById('modalRoot').innerHTML='';
}
