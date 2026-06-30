MataMan.currentUser = JSON.parse(localStorage.getItem('mataUser') || 'null');
MataMan.members = JSON.parse(localStorage.getItem('mataMembers') || '[]');

MataMan.addCart = (name,price,weight) => {
  let item = MataMan.cart.find(i=>i.name===name);
  if(item){item.qty++}else{MataMan.cart.push({name,price,qty:1,checked:true,weight})}
  MataMan.saveCart();
  MataMan.updateCart();
}

MataMan.updateCart = () => {
  const checked = MataMan.cart.filter(i=>i.checked);
  MataMan.totalWeight = checked.reduce((a,b)=>a+b.weight*b.qty,0);
  const base = Number(document.getElementById('shipBase').value);
  const formula = document.getElementById('shipFormula').value.replace(/น้ำหนัก/g, MataMan.totalWeight);
  MataMan.ship = Math.ceil(eval(formula) || base);
  document.getElementById('shipReal').textContent = MataMan.ship;
  
  const subtotal = checked.reduce((a,b)=>a+b.price*b.qty,0);
  document.getElementById('rightPanel').innerHTML = `
    ${MataMan.cart.map((i,idx)=>`
      <div style="display:flex;gap:5px;align-items:center;margin:5px 0">
        <input type="checkbox" ${i.checked?'checked':''} onchange="MataMan.toggle(${idx})">
        <span style="flex:1">${i.name}</span>
        <button onclick="MataMan.qty(${idx},-1)">-</button>
        <span>${i.qty}</span>
        <button onclick="MataMan.qty(${idx},1)">+</button>
        <span>${i.price*i.qty}฿</span>
        <button onclick="MataMan.del(${idx})">x</button>
      </div>`).join('')}
    <hr><b>รวม: ${subtotal} + ${MataMan.ship} = ${subtotal+MataMan.ship}฿</b>
  `;
}

MataMan.saveCart = () => {
  localStorage.setItem('mataCart_guest', JSON.stringify(MataMan.cart));
  if(MataMan.currentUser){ // ถ้าเป็นสมาชิก ให้บันทึกแยก
    const m = MataMan.members.find(x=>x.name===MataMan.currentUser.name);
    if(m){m.cart = MataMan.cart; localStorage.setItem('mataMembers', JSON.stringify(MataMan.members));}
  }
}

MataMan.loadCart = () => {
  const key = MataMan.currentUser? `mataMembers` : `mataCart_guest`;
  if(MataMan.currentUser){
    const m = MataMan.members.find(x=>x.name===MataMan.currentUser.name);
    MataMan.cart = m?.cart || [];
  }else{
    MataMan.cart = JSON.parse(localStorage.getItem('mataCart_guest') || '[]');
  }
}

// ฟังก์ชันอื่นๆ
MataMan.toggle = (i)=>{MataMan.cart[i].checked=!MataMan.cart[i].checked;MataMan.saveCart();MataMan.updateCart();}
MataMan.qty = (i,d)=>{MataMan.cart[i].qty+=d;if(MataMan.cart[i].qty<1)MataMan.cart.splice(i,1);MataMan.saveCart();MataMan.updateCart();}
MataMan.del = (i)=>{MataMan.cart.splice(i,1);MataMan.saveCart();MataMan.updateCart();}
MataMan.clearCart = ()=>{MataMan.cart=[];MataMan.saveCart();MataMan.updateCart();}

MataMan.loadCart(); MataMan.updateCart(); // โหลดครั้งแรก
