let str = "Hola,soy Christian Matamoros";
let str2 ="Soy Desarrollador Web";
//i=0
let arrStr = str.split("");
let arrStr2 = str2.split("");
let wr = (arrStr, arrStr2) => {
  let i = 0
  let printStr2 = setInterval(function () {
    document.getElementById("mensaje").innerHTML += arrStr[i];
    i++;
    if (i === arrStr.length) {
      clearInterval(printStr2);
      fmsj()
    }
  }, 200);
};

function fmsj() 
{
  let res;
  let msj1= document.getElementById("mensaje").innerHTML
  let msj2= document.getElementById("sub-mensaje").innerHTML
  if (msj1==="" & msj2==="")
  {
     //res = true
     wr(arrStr,arrStr2)
  }
  else{
    if(msj1.length===arrStr.length){
      let i= 0
      let printSx = setInterval(function () {
        i++
        if( i=100 )
        {
          i=0
          clearInterval(printSx)
      document.getElementById("mensaje").innerHTML=""
      wr(arrStr,arrStr2)

        }
      },300);
    }
    //res =false

  } 
  //return res
}
//wr(arrStr,arrStr2)
//var vmsj =
fmsj()
//while (vmsj===true) {
 // wr(arrStr,arrStr2)  
//}
 // while (wr()===false) {
    
  //}
  //wr("Hola,soy Christian Matamoros", "Soy Desarrollador Web");