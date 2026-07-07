<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>แม่ช่อมะขาม | ร้านขนมไทย</title>
<style>
  :root{--gold:#DAA520;--bg:#111;--card:#1a1a1a}
  *{box-sizing:border-box}
  body{margin:0;font-family:'Noto Serif Thai',serif;background:var(--bg);color:#eee}
  header{position:sticky;top:0;background:#000;padding:12px 20px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--gold);z-index:10}
  .logo{font-size:24px;color:var(--gold);margin:0}
  #cartBtn{position:relative;background:var(--gold);border:0;padding:8px 14px;border-radius:8px;cursor:pointer;font-weight:700}
  #cartBadge{position:absolute;top:-6px;right:-6px;background:red;color:#fff;font-size:12px;padding:2px 6px;border-radius:50%}
  .container{max-width:1100px;margin:0 auto;padding:20px}
  .products{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:15px}
  .card{background:var(--card);border-radius:12px;padding:12px;cursor:pointer;border:1px solid #333}
  .card img{width:100%;border-radius:8px;aspect-ratio:1/1;object-fit:cover}
  .card button{width:100%;margin-top:8px;background:var(--gold);border:0;padding:8px;border-radius:6px;cursor:pointer;font-weight:700}
  .contact{margin-top:40px;padding:20px;background:var(--card);border-radius:12px;border:1px solid var(--gold)}
  .contact h2{color:var(--gold);margin-top:0}
  .contact-wrap{display:flex;gap:20px;flex-wrap:wrap}
  .contact div{flex:1;min-width:280px}
  iframe{width:100%;height:250px;border:0;border-radius:8px}
  
  /* ตะกร้า */
  .modal{display:none;position:fixed;inset:0;background:#0008;z-index:20;align-items:flex-end}
  .modal.open{display:flex}
  .drawer{background:#181818;width:100%;max-width:420px;height:100%;margin-left:auto;padding:20px;overflow-y:auto}
  .cart-item{display:flex;gap:10px;margin-bottom:12px;border-bottom:1px solid #333;padding-bottom:12px}
  .cart-item img{width:60px;height:60px;border-radius:6px;object-fit:cover}
  .qty{display:flex;gap:6px;align-items:center}
  .qty button{padding:2px 8px}
  .total{font-size:20px;font-weight:700;color:var(--gold);margin:12px 0}
  input,textarea{width:100%;padding:8px;margin:6px 0;background:#222;border:1px solid #444;border-radius:6px;color:#eee}
  .btn{width:100%;padding:12px;background:var(--gold);border:0;border-radius:8px;font-weight:700;cursor:pointer;margin-top:8px}
</style>
</head>
<body>
<header>
  <h1 class="logo">แม่ช่อมะขาม</h1>
  <button id="cartBtn" onclick="MataMan.openCart()">ตะกร้า <span id="cartBadge">0</span></button>
</header>

<div class="container" id="mainPanel"></div>

<!-- Modal ตะกร้า -->
<div class="modal" id="cartModal" onclick="if(event.target.id==='cartModal')MataMan.closeCart()">
  <div class="drawer" id="cartDrawer"></div>
</div>

<script>
const MataMan = {
  // [เพิ่มราคา] ใส่ price ให้ครบ
  products:[
    {id:1,name:'มะขามแช่อิ่ม',img:'https://placehold.co/400x400/DAA520/000?text=1',price:120},
    {id:2,name:'มะขามกวน',img:'https://placehold.co/400x400/8B0000/fff?text=2',price:90},
    {id:3,name:'มะขามสามรส',img:'https://placehold.co/400x400/000080/fff?text=3',price:110}
  ],
  cart: JSON.parse(localStorage.getItem('m003_cart')||'[]'),

  saveCart(){localStorage.setItem('m003_cart',JSON.stringify(this.cart));this.updateBadge()},
  updateBadge(){document.getElementById('cartBadge').textContent=this.cart.reduce((a,b)=>a+b.qty,0)},

  addToCart(id){
    const item=this.cart.find(x=>x.id===id);
    if(item)item.qty++; else this.cart.push({id,qty:1});
    this.saveCart(); this.openCart();
  },
  removeFromCart(id){this.cart=this.cart.filter(x=>x.id!==id);this.saveCart();this.renderCart()},
  changeQty(id,d){const i=this.cart.find(x=>x.id===id);if(!i)return;i.qty+=d;if(i.qty<=0)this.removeFromCart(id);else{this.saveCart();this.renderCart()}},
  getTotal(){return this.cart.reduce((sum,x)=>{const p=this.products.find(p=>p.id===x.id);return sum+(p.price*x.qty)},0)},

  renderMain(){
    document.getElementById('mainPanel').innerHTML=`
    <h2>สินค้าทั้งหมด</h2>
    <div class="products">
      ${this.products.map(p=>`
        <div class="card">
          <img src="${p.img}" alt="${p.name}">
          <div style="margin:8px 0;font-weight:700">${p.name}</div>
          <div style="color:var(--gold)">${p.price} บาท</div>
          <button onclick="MataMan.addToCart(${p.id})">ใส่ตะกร้า</button>
        </div>`).join('')}
    </div>

    <div class="contact">
      <h2>ข้อมูลติดต่อร้านแม่ช่อมะขาม</h2>
      <div class="contact-wrap
