MataMan.calcShipping = () => {
  const kg = MataMan.totalWeight/1000;
  const formulaEl = document.getElementById('shipFormula');
  if(!formulaEl) return MataMan.ship = 40;
  const formula = formulaEl.value.replace(/น้ำหนัก/g, kg);
  try{ MataMan.ship = Math.ceil(eval(formula)); }catch(e){ MataMan.ship = 40; }
}
