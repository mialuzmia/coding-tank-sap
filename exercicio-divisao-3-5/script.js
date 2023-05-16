let boxNum = prompt('Digite um número') 
let num = Number(boxNum)

 if (boxNum.trim() === '') {
    alert('digite algo')
 }else if(num % 5 === 0 && num % 3 === 0){
    alert('Divisível por 5 e 3')
 }else if(num % 5 === 0){
    alert('Divisível por 5')
 }else if(num % 3 === 0){
   alert('Divisível por 3')
}else{
   alert('Não é divisível nem por 3 nem por 5')
}