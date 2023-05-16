let boxNum = prompt('Digite um número:') 
let num = Number(boxNum)

 if (boxNum.trim() === '') {
    alert('digite algo')
 }else if(num > 0){
    alert('Positivo')
 }else if(num < 0){
    alert('Negativo')
 }else{
   alert('Numero zero')
 }