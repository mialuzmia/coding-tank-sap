let boxIdade = prompt('Digite sua idade') 
let idade = Number(boxIdade)

 if (boxIdade.trim() === '') {
    alert('digite algo')
 }else if(idade >= 18){
    alert('Maior de idade')
 }else{
    alert('Menor de idade')
 }