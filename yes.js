function fncMatrix(){
    let c = range.value;
    mtrx.innerHTML =
    `(.2, ${c}, 0, -.2, -420, -1468);`;
    reflect.style.transform = 
    `matrix(.2, ${c},0, -.2, -420, -1468)`;
  }