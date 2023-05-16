let boxDia = prompt('Digite um número') 
let dia = Number(boxDia)

 if (boxDia.trim() === '') {
    alert('digite algo')
 }else if(dia === 1){
    alert('Domingo')
 }else if(dia === 2){
    alert('Segunda')
 }else if(dia === 3){
   alert('Terça')
}else if(dia === 4){
   alert('Quarta')
}else if(dia === 5){
   alert('Quinta')
}else if(dia === 6){
   alert('Sexta')
}else if(dia === 7){
   alert('Sábado')
}else{
   alert('dia invalido')
}