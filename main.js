const inputData=document.getElementById('entrada');
const boton=document.getElementById('boton');

function sayMe (){
    console.log(inputData.value);
}

boton.addEventListener('click',sayMe);