MataMan.renderLeft = () => {
  const total = MataMan.cart.filter(i=>i.checked).reduce((a,b)=>a+b.price*b.qty,0);
  document.getElementById('leftPanel').innerHTML = `
    <h3>คำสั่งซื้อ</h3>
    <button onclick="MataMan.clearCart()">1. ล้างตะกร้า</button>
    <button onclick="MataMan.openCheckout()">2. ไปชำระเงิน</button>
    
    <h3>แสดงผล</h3>
    <div class="sum-box">
      สินค้า: ${MataMan.cart.filter(i=>i.checked).length} ชิ้น<br>
      น้ำหนักรวม: ${MataMan.totalWeight} ก.<br>
      ยอดสินค้า: ${total} ฿<br>
      <table class="ship-table">
        <tr><td>จัดส่งธรรมดา</td><td>สูตร</td><td>ค่าส่งจริง</td></tr>
        <tr>
          <td><input id="shipBase" value="40"></td>
          <td><input id="shipFormula" value="40 + น้ำหนัก*10" oninput="MataMan.updateCart()"></td>
          <td id="shipReal">${MataMan.ship}</td>
        </tr>
      </table>
      <b>รวม: ${total+MataMan.ship} ฿</b>
    </div>
    <h3>หมวดสินค้า</h3>
    <div id="menu">${MataMan.products.map(p=>`<button onclick="MataMan.filter(${p.id})">${p.name}</button>`).join('')}</div>
  `;
}

MataMan.renderMain = () => {
  document.getElementById('mainPanel').innerHTML = `
    <h1 class="logo">แม่ช่อมะขาม</h1>
    <div class="products" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:15px">
      ${MataMan.products.map(p=>`
        <div class="card" style="background:#222;border-radius:12px;padding:10px;cursor:pointer" onclick="MataMan.pickProduct(${p.id})">
          <img src="${p.img}" style="width:100%;border-radius:8px"><div>${p.name}</div>
        </div>`).join('')}
    </div>`;
}

MataMan.pickProduct = (id) => {
  const p = MataMan.products.find(x=>x.id===id);
  let html = `<h2>${p.name} ${p.weight}ก.</h2>`;
  for(const [k,v] of Object.entries(p.prices)){
    html+=`<button style="margin:5px;padding:8px;background:#333;color:#fff;border-radius:6px" onclick="MataMan.addCart('${p.name} ${k}',${v},${p.weight})">${k}: ${v}฿</button>`;
  }
  html+=`<br><button onclick="document.getElementById('modalRoot').innerHTML=''">ปิด</button>`;
  document.getElementById('modalRoot').innerHTML = `<div class="modal active"><div class="box">${html}</div></div>`;
}

MataMan.filter = (id) => { /* ทำกรองสินค้า */ }
MataMan.renderLeft(); MataMan.renderMain();
