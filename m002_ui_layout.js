MataMan.renderLeft = () => { 
  const total = MataMan.cart.filter(i=>i.checked).reduce((a,b)=>a+b.price*b.qty,0); 
  document.getElementById('leftPanel').innerHTML = `
  <h3>คำสั่งซื้อ</h3> 
  <button onclick="MataMan.clearCart()">1. ล้างตะกร้า</button> 
  <button onclick="MataMan.showCheckout()">2. ไปชำระเงิน</button> 
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
}; 

MataMan.renderMain = () => { 
  document.getElementById('mainPanel').innerHTML = `
  <h1 class="logo">แม่ช่อมะขาม</h1> 
  <div class="products" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:15px">
  ${MataMan.products.map(p=>`
    <div class="card" style="background:#222;border-radius:12px;padding:10px;cursor:pointer" onclick="MataMan.pickProduct(${p.id})">
     <img src="${p.img}" style="width:100%;border-radius:8px"><div>${p.name}</div>
    </div>`).join('')}
  </div>

  <!-- [กล่องติดต่อ] Facebook + Messenger + ปุ่ม Map -->
  <div style="margin-top:40px;padding:20px;background:#1a1a1a;border-radius:12px;border:1px solid var(--gold)">
    <h2 style="color:var(--gold);margin-top:0">ติดต่อร้านแม่ช่อมะขาม</h2>
    <div style="display:flex;gap:20px;flex-wrap:wrap;align-items:start">
      <div style="flex:1;min-width:280px">
        <p><b>ที่อยู่:</b> 833/ข หมู่ 2 ต.ป่าโมก อ.ป่าโมก จ.อ่างทอง 14130</p> 
        <p><b>เบอร์โทร:</b> 062-410-0661 , 086-620-0548</p> 
        <p><b>เวลาเปิดร้าน:</b> จ-อา 8:00 - 19:00 น.</p>
        <div style="display:flex;gap:10px;margin-top:15px;flex-wrap:wrap">
          <a href="https://www.facebook.com/share/1CzHxwUewL/" target="_blank" style="padding:8px 12px;background:#1877F2;color:#fff;border-radius:6px;text-decoration:none;font-weight:bold">📘 Facebook</a>
          <a href="https://m.me/1CzHxwUewL" target="_blank" style="padding:8px 12px;background:#00B2FF;color:#fff;border-radius:6px;text-decoration:none;font-weight:bold">💬 Messenger</a>
        </div>
      </div>
      <!-- [แก้แล้ว] เปลี่ยนจาก iframe เป็นปุ่ม -->
      <div style="flex:2;min-width:300px;height:250px;border-radius:8px;overflow:hidden;border:2px solid var(--gold);display:flex;align-items:center;justify-content:center;background:#222">
        <a href="https://maps.app.goo.gl/o63Rdkq7FHWs2VQD6" target="_blank" style="padding:15px 25px;background:var(--gold);color:#000;border-radius:8px;text-decoration:none;font-weight:bold;font-size:16px;text-align:center">📍 ดูแผนที่ร้าน<br>ร้านช่อมะขาม ป่าโมก</a>
      </div>
    </div>
  </div>
  `;
}; 

MataMan.pickProduct = (id) => { 
  const p = MataMan.products.find(x=>x.id===id); 
  let html = `<h2>${p.name} ${p.weight}ก.</h2>`;
  for(const [k,v] of Object.entries(p.prices)){
    html+=`<button style="margin:5px;padding:8px;background:#333;color:#fff;border-radius:6px" onclick="MataMan.addCart('${p.name} ${k}',${v},${p.weight})">${k}: ${v}฿</button>`;
  };
  html+=`<br><button onclick="document.getElementById('modalRoot').innerHTML=''">ปิด</button>`;
  document.getElementById('modalRoot').innerHTML = `<div class="modal active"><div class="box">${html}</div></div>`;
}; 

MataMan.filter = (id) => { /* ทำกรองสินค้า */ }; 

MataMan.renderLeft(); 
MataMan.renderMain();
