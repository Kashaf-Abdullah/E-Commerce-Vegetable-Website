var i=0;
var j=0;
function change(){
    var divtag=document.getElementById('veg');
    var bgcolor=["GREEN GROCERY","FOODSTUFFS","GARDEN FRESH","FRESH VEGETABLES"];
    var txtcolor=["Black"];
    // divtag.style.backgroundColor=bgcolor[i];
    divtag.innerText=bgcolor[i];
  divtag.style.color=txtcolor[j];
  i=(i+1)%bgcolor.length;
  j=(j+1)%txtcolor.length;

  
}
setInterval(change,2000);
const mybutton=()=>{

    var mybtn=prompt('enter your id');
   

    var showbtn=document.getElementById('showbtn');
    showbtn.innerHTML=`Name :${mybtn} `;
   
}
const selectElement=()=>{
    const kilo=document.getElementById('kilo').value;

    //display
    var result=document.getElementById('result');

    result.innerHTML=` order ${kilo} kilo Lettuce`;
    console.log(`Customer order ${kilo} kilo potaoes`)
}


const selectElement2=()=>{
    const kilo2=document.getElementById('kilo2').value;

    //display
    const result2=document.getElementById('result2');

    result2.innerHTML=`Order ${kilo2} kilo Tomato`;
    console.log(`Customer order ${kilo2} kilo lettuce`)
}

const selectElement3=()=>{
    const kilo3=document.getElementById('kilo3').value;

    //display
    const result3=document.getElementById('result3');

    result3.innerHTML=`order ${kilo3} kilo Potato`;
    console.log(`Customer order ${kilo3} kilo lettuce`)
}
const selectElement4=()=>{
    const kilo4=document.getElementById('kilo4').value;

    //display
    const result4=document.getElementById('result4');

    result4.innerHTML=`Order ${kilo4} kilo Cabbage `;
    console.log(`Customer order ${kilo4} kilo lettuce`)
} 

const selectElement5=()=>{
    const kilo5=document.getElementById('kilo5').value;

    //display
    const result5=document.getElementById('result5');

    result5.innerHTML=`order ${kilo5} kilo lRed Pepper`;
    console.log(`Customer order ${kilo5} kilo lettuce`)
}

const selectElement6=()=>{
    const kilo6=document.getElementById('kilo6').value;

    //display
    const result6=document.getElementById('result6');

    result6.innerHTML=`order ${kilo6} kilo Carrot`;
    console.log(`Customer order ${kilo6} kilo lettuce`)
}


const selectElement7=()=>{
    const kilo7=document.getElementById('kilo7').value;

    //display
    const result7=document.getElementById('result7');

    result7.innerHTML=` order ${kilo7} kilo Clantro`;
    console.log(`Customer order ${kilo7} kilo lettuce`)
}

const selectElement8=()=>{
    const kilo8=document.getElementById('kilo8').value;

    //display
    const result8=document.getElementById('result8');

    result8.innerHTML=`order ${kilo8} kilo Brocolli`;
    console.log(`Customer order ${kilo8} kilo lettuce`)
}

const selectElement9=()=>{
    const kilo9=document.getElementById('kilo9').value;

    //display
    const result9=document.getElementById('result9');

    result9.innerHTML=`order ${kilo9} kilo Onion`;
    console.log(`Customer order ${kilo9} kilo lettuce`)
}

function confirm(){
    
    const result9=document.getElementById('result9');

result9.innerHTML=``;
console.log(`Customer order ${kilo9} kilo lettuce`)
document.getElementById('kilo9').remove();

const result6=document.getElementById('result6');

result6.innerHTML=``;
console.log(`Customer order ${kilo6} kilo lettuce`)
document.getElementById('kilo6').remove();

const result8=document.getElementById('result8');

result8.innerHTML=``;
console.log(`Customer order ${kilo8} kilo lettuce`)
document.getElementById('kilo8').remove();



const result7=document.getElementById('result7');

result7.innerHTML=``;
console.log(`Customer order ${kilo7} kilo lettuce`)
document.getElementById('kilo7').remove();


const result5=document.getElementById('result5');

result5.innerHTML=``;
console.log(`Customer order ${kilo5} kilo lettuce`)
document.getElementById('kilo5').remove();



const result4=document.getElementById('result4');

result4.innerHTML=``;
console.log(`Customer order ${kilo4} kilo lettuce`)
document.getElementById('kilo4').remove();



const result3=document.getElementById('result3');

result3.innerHTML=``;
console.log(`Customer order ${kilo3} kilo lettuce`)
document.getElementById('kilo3').remove();

const result2=document.getElementById('result2');

result2.innerHTML=``;
console.log(`Customer order ${kilo2} kilo lettuce`)
document.getElementById('kilo2').remove();

const result=document.getElementById('result');

result.innerHTML=``;
console.log(`Customer order ${kilo} kilo lettuce`)
document.getElementById('kilo').remove();

}
// function clear(){
//     alert('your order is confirm');
//      alert('THANKYOU FOR SHOPPING!!!!!');
// }