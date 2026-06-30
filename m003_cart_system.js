MataMan.products = Array.from({length:10},(_,i)=>({
  id:i+1,name:`มะขามแปรรูป #${i+1}`,weight:250*(i+1),
  img:`https://picsum.photos/200?random=${i}`,
  prices:{'กล่องเล็ก':60,'กล่องใหญ่':110,'ครึ่งก.':180,'ก.':320}
}));

MataMan.addCart = (name,price,weight) => {
  MataMan.cart.push({name,price,weight,qty:1,checked:true});
  MataMan.updateCart(); // สั่งรีคำนวณ
}

MataMan.updateCart = () => {
  MataMan.totalWeight = MataMan.cart.filter(i=>i.checked).reduce((a,b)=>a+b.weight*b.qty,0);
  MataMan.calcShipping(); // ไปเรียก m004
  MataMan.renderLeft();   // ไปเรียก m002
}

MataMan.clearCart = () => { MataMan.cart=[]; MataMan.updateCart(); }
