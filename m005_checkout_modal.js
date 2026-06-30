const BANK_ACCOUNT = {name:"น.ส.ช่อมะขาม ธ.กสิกร", number:"123-4-56789-0"};

MataMan.openCheckout = () => {
  if(MataMan.cart.filter(i=>i.checked).length===0) return alert('ตะกร้าว่าง');
  const total = MataMan.cart.filter(i=>i.checked).reduce((a,b)=>a+b.price*b.qty,0) + MataMan.ship;
  const itemsHtml = MataMan.cart.filter(i=>i.checked).map(i=>`${i.name} ${i.price}฿`).join('<br>');
  
  document.getElementById('modalRoot').innerHTML = `
  <div class="modal active">
    <div class="box">
      <h2>ยืนยันคำสั่งซื้อครั้งสุดท้าย</h2>
      ${itemsHtml}<hr>
      ค่าส่ง: ${MataMan.ship} ฿<br><b>รวม: ${total} ฿</b><br><br>
      <h3>บัญชีผู้รับเงิน</h3>
      <div style="background:#333;padding:10px;border-radius:6px">${BANK_ACCOUNT.name}<br>เลขที่: ${BANK_ACCOUNT.number}</div><br>
      <input id="name" placeholder="ชื่อ-สกุล" style="width:100%;padding:8px;margin:5px 0;background:#333;color:#fff">
      <input id="addr" placeholder="ที่อยู่" style="width:100%;padding:8px;margin:5px 0;background:#333;color:#fff">
      <button onclick="MataMan.confirmOrder(${total})">ยืนยัน จัดส่งเลย</button>
      <button onclick="document.getElementById('modalRoot').innerHTML=''">ย้อนกลับ</button>
    </div>
  </div>`;
}

MataMan.confirmOrder = (total) => {
  const name = document.getElementById('name').value || '-';
  const addr = document.getElementById('addr').value || '-';
  const items = MataMan.cart.filter(i=>i.checked);
  const subtotal = items.reduce((a,b)=>a+b.price*b.qty,0);

  const data = {name, addr, items, subtotal, ship: MataMan.ship, total, type:'guest'};
  
  saveOrderToAdmin(data); // 1. s เล็ก 2. ส่ง data ไปตรงๆ
  
  alert(`ส่งออเดอร์ ${total}฿ ให้แอดมินแล้ว ✅`);
  MataMan.clearCart();
  document.getElementById('modalRoot').innerHTML='';
}
