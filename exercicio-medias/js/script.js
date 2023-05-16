function calcularMedia() {
    
    let boxNota1 = document.getElementById("box-num1");
    let boxNota2 = document.getElementById("box-num2");
    let res = document.getElementById('res')

    let nota1 = Number(boxNota1.value)
    let nota2 = Number(boxNota2.value)
    let media = (nota1 + nota2) / 2;

    if (boxNota1.value.length == 0 || boxNota2.value.length == 0) {
        alert('ERRO! COMPLETE TODOS OS CAMPOS.')
    }else if(media >= 9.5){
        res.innerHTML = `Resultado: ${media}. Você tirou A.\u{1F601}`
    } else if (media >= 8) {
        res.innerHTML = `Resultado: ${media}. Você tirou B. \u{1F601}`
    } else if (media >= 6.5) {
        res.innerHTML = `Resultado: ${media}. Você tirou C. \u{1F625}`  
    } else if(media >= 4.5){
        res.innerHTML = `Resultado: ${media}. Você tirou D \u{1F625}`
    }else if(media > 3){
        res.innerHTML = `Resultado: ${media}. Você tirou E.\u{1F641}`
    }else{
        res.innerHTML = `Resultado: ${media}. Você tirou F. \u{1F641}`
    }
   
}
