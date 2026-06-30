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
}; // [1] ปิด ;

MataMan.renderMain = () => {
  document.getElementById('mainPanel').innerHTML = `
  <!-- [ใหม่ v13] Header 3 ชั้น ด้วยวิดีโอ -->
  <div style="text-align:center;margin-bottom:25px;padding:20px 0;border-bottom:2px solid var(--gold)">
    <!-- ชั้นที่ 1: โลโก้วิดีโอ mp4 -->
    <video autoplay loop muted playsinline style="width:100%;max-width:320px;height:auto;border-radius:12px">
      <source src="logo.mp4" type="video/mp4">
      แม่ช่อมะขาม <!-- ข้อความสำรองถ้าเล่นไม่ได้ -->
    </video>
    
    <!-- ชั้นที่ 2: สโลแกนวิดีโอ mp4 -->
    <video autoplay loop muted playsinline style="width:100%;max-width:400px;height:auto;margin-top:8px;border-radius:8px">
      <source src="slogan.mp4" type="video/mp4">
      มะขามแช่อิ่มรสเด็ด ส่งตรงจากป่าโมก อ่างทอง
    </video>
    
    <!-- ชั้นที่ 3: คำเตือน เหมือนเดิม -->
    <div style="margin-top:15px;padding:12px;background:#331100;border:1px solid #ff8800;border-radius:8px;color:#ffcc88;font-size:14px;line-height:1.7;font-weight:bold">
      ⚠️ สั่งวันนี้จะจัดทำขนมส่งพรุ่งนี้ตอน 4 โมงเย็น รอรับสินค้าได้เลยไม่เกิน 24 ชม.
    </div>
  </div>

  <div class="products" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:15px">
  ${MataMan.products.map(p=>`
    <div class="card" style="background:#222;border-radius:12px;padding:10px;cursor:pointer" onclick="MataMan.pickProduct(${p.id})">
     <img src="${p.img}" style="width:100%;border-radius:8px"><div>${p.name}</div>
    </div>`).join('')}
  </div>

  <!-- [ช่องเช็คพื้นที่] เหมือนเดิม -->
  <div style="margin-top:30px;padding:15px;background:#1a1a1a;border-radius:8px;border:1px solid var(--gold)">
    <b style="color:var(--gold)">เช็คพื้นที่จัดส่งด่วน 24 ชม.</b>
    <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap">
      <input id="checkDistrict" placeholder="อำเภอ" style="flex:1;min-width:120px;padding:8px;border-radius:6px;border:1px solid #444;background:#111;color:#fff">
      <input id="checkProvince" placeholder="จังหวัด" style="flex:1;min-width:120px;padding:8px;border-radius:6px;border:1px solid #444;background:#111;color:#fff">
      <button onclick="MataMan.checkShip()" style="padding:8px 15px;background:var(--gold);color:#000;border:none;border-radius:6px;font-weight:bold">เช็ค</button>
    </div>
    <div id="shipResult" style="margin-top:10px;font-size:14px"></div>
  </div>

  <!-- [กล่องติดต่อ] เหมือนเดิม -->
  <div style="margin-top:40px;padding:20px;background:#1a1a1a;border-radius:12px;border:1px solid var(--gold)">
    <h2 style="color:var(--gold);margin-top:0">ติดต่อร้านแม่ช่อมะขาม</h2>
    <div style="display:flex;gap:20px;flex-wrap:wrap;align-items:start">
      <div style="flex:1;min-width:280px">
        <p><b>ที่อยู่:</b> 833/ข หมู่ 2 ต.ป่าโมก อ.ป่าโมก จ.อ่างทอง 14130</p>
        <p><b>เบอร์โทร:</b> 062-410-0661, 086-620-0548</p>
        <p><b>เวลาเปิดร้าน:</b> จ-อา 8:00 - 19:00 น.</p>
        <div style="display:flex;gap:10px;margin-top:15px;flex-wrap:wrap">
          <a href="https://www.facebook.com/share/1CzHxwUewL/" target="_blank" style="padding:8px 12px;background:#1877F2;color:#fff;border-radius:6px;text-decoration:none;font-weight:bold">📘 Facebook</a>
          <a href="https://m.me/1CzHxwUewL" target="_blank" style="padding:8px 12px;background:#00B2FF;color:#fff;border-radius:6px;text-decoration:none;font-weight:bold">💬 Messenger</a>
        </div>
      </div>
      <div style="flex:2;min-width:300px;height:250px;border-radius:8px;overflow:hidden;border:2px solid var(--gold);display:flex;align-items:center;justify-content:center;background:#222">
        <a href="https://maps.app.goo.gl/o63Rdkq7FHWs2VQD6" target="_blank" style="padding:15px 25px;background:var(--gold);color:#000;border-radius:8px;text-decoration:none;font-weight:bold;font-size:16px;text-align:center">📍 ดูแผนที่ร้าน<br>ร้านช่อมะขาม ป่าโมก</a>
      </div>
    </div>
  </div>
  `;
};
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
        <p><b>เบอร์โทร:</b> 062-410-0661, 086-620-0548</p>
        <p><b>เวลาเปิดร้าน:</b> จ-อา 8:00 - 19:00 น.</p>
        <div style="display:flex;gap:10px;margin-top:15px;flex-wrap:wrap">
          <a href="https://www.facebook.com/share/1CzHxwUewL/" target="_blank" style="padding:8px 12px;background:#1877F2;color:#fff;border-radius:6px;text-decoration:none;font-weight:bold">📘 Facebook</a>
          <a href="https://m.me/1CzHxwUewL" target="_blank" style="padding:8px 12px;background:#00B2FF;color:#fff;border-radius:6px;text-decoration:none;font-weight:bold">💬 Messenger</a>
        </div>
      </div>
      <div style="flex:2;min-width:300px;height:250px;border-radius:8px;overflow:hidden;border:2px solid var(--gold);display:flex;align-items:center;justify-content:center;background:#222">
        <a href="https://maps.app.goo.gl/o63Rdkq7FHWs2VQD6" target="_blank" style="padding:15px 25px;background:var(--gold);color:#000;border-radius:8px;text-decoration:none;font-weight:bold;font-size:16px;text-align:center">📍 ดูแผนที่ร้าน<br>ร้านช่อมะขาม ป่าโมก</a>
      </div>
    </div>
  </div>
  `;
}; // [2] ปิด ;

MataMan.pickProduct = (id) => {
  const p = MataMan.products.find(x=>x.id===id);
  let html = `<h2>${p.name} ${p.weight}ก.</h2>`;
  for(const [k,v] of Object.entries(p.prices)){
    html+=`<button style="margin:5px;padding:8px;background:#333;color:#fff;border-radius:6px" onclick="MataMan.addCart('${p.name} ${k}',${v},${p.weight})">${k}: ${v}฿</button>`; // [แก้แล้ว] ลบ ; ออก
  } // [แก้แล้ว] ลบ ; เกินออก
  html+=`<br><button onclick="document.getElementById('modalRoot').innerHTML=''">ปิด</button>`;
  document.getElementById('modalRoot').innerHTML = `<div class="modal active"><div class="box">${html}</div></div>`;
}; // [3] ปิด ;

MataMan.filter = (id) => { /* ทำกรองสินค้า */ }; // [4] ปิด ;

MataMan.renderLeft();
MataMan.renderMain(); // [จบไฟล์]
