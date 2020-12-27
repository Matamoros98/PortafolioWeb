
let wr = (str) => {
  let arrFromSrt = str.split('');
  let i = 0;
  let printStr = setInterval(function () {
    document.getElementById("mensaje").innerHTML += arrFromSrt[i];
    i++;

    if(i === arrFromSrt.length)
    {
        clearInterval(printStr);
        wrp('soy Desarrollador Web');
    }
  }, 300);
};
let wrp = (str) => {
    let arrFromSrt = str.split('');
    let i = 0;
    let printStr = setInterval(function () {
      document.getElementById("sub-mensaje").innerHTML += arrFromSrt[i];
      i++;
  
      if(i === arrFromSrt.length)
      {
          clearInterval(printStr);
      }
    }, 300);
    return true;
  };
wr('Hola,soy Christian Matamoros');

