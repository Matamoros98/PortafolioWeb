let wr = (str, str2) => {
  let arrFromSrt = str.split("");
  let i = 0;
  let printStr = setInterval(function () {
    document.getElementById("mensaje").innerHTML += arrFromSrt[i];
    i++;
    if (i === arrFromSrt.length) {
      clearInterval(printStr);
      i = 0;
      arrFromSrt.length = 0;
      arrFromSrt = str2.split("");
      let printStr2 = setInterval(function () {
        document.getElementById("sub-mensaje").innerHTML += arrFromSrt[i];
        i++;
        if (i === arrFromSrt.length) {
          clearInterval(printStr2);
        }
      }, 200);
    }
  }, 200);
};
wr("Hola,soy Christian Matamoros", "Soy Desarrollador Web");
