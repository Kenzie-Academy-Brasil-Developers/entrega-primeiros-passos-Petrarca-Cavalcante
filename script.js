let nomeAluno = prompt("Digite o nome do aluno")
if (nomeAluno.length < 5) {
    alert(`nome é inválido`)
}







let notaDePresenca = parseInt(prompt("Digite a nota de presença do aluno"))
if (notaDePresenca < 0 || notaDePresenca > 10 ) {
    alert("Nota inválida")
} 




let materia1 = prompt("Digite o nome da matéria")
let nota1 = parseInt(prompt("Digite a nota da matéria"))
if (nota1 > 10 || nota1 < 0) {
    alert("Nota inválida")
}



let materia2 = prompt("Digite o nome da matéria")
let nota2 = parseInt(prompt("Digite a nota da matéria"))
if (nota2 > 10 || nota2 < 0) {
    alert("Nota inválida")
}



let materia3 = prompt("Digite o nome da matéria")
let nota3 = parseInt(prompt("Digite a nota da matéria"))
if (nota3 > 10 || nota3 < 0) {
    alert("Nota inválida")
}



let materia4 = prompt("Digite o nome da matéria")
let nota4 = parseInt(prompt("Digite a nota da matéria"))
if (nota4 > 10 || nota4 < 0) {
    alert("Nota inválida")
}


let materia5 = prompt("Digite o nome da matéria")
let nota5 = parseInt(prompt("Digite a nota da matéria"))
if (nota5 > 10 || nota5 < 0) {
    alert("Nota inválida")
}


let materia6 = prompt("Digite o nome da matéria")
let nota6 = parseInt(prompt("Digite a nota da matéria"))
if (nota6 > 10 || nota6 < 0) {
    alert("Nota inválida")
}


let materia7 = prompt("Digite o nome da matéria")
let nota7 = parseInt(prompt("Digite a nota da matéria"))
if (nota7 > 10 || nota7 < 0) {
    alert("Nota inválida")
}


let materia8 = prompt("Digite o nome da matéria")
let nota8 = parseInt(prompt("Digite a nota da matéria"))
if (nota8 > 10 || nota8 < 0) {
    alert("Nota inválida")
}


let materia9 = prompt("Digite o nome da matéria")
let nota9 = parseInt(prompt("Digite a nota da matéria"))
if (nota9 > 10 || nota9 < 0) {
    alert("Nota inválida")
}


let materia10 = prompt("Digite o nome da matéria")
let nota10 = parseInt(prompt("Digite a nota da matéria"))
if (nota10 > 10 || nota10 < 0) {
    alert("Nota inválida")
}




let notaMedia = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota9 + nota10)  / 10

if (notaMedia >= 8 && notaDePresenca >=6) {
    alert(`A nota do aluno ${nomeAluno} é de ${notaMedia} e sua presença de ${notaDePresenca}: Aluno aprovado!`)
} else {
    alert(`A nota do aluno ${nomeAluno} é de ${notaMedia} e sua presença de ${notaDePresenca}: Aluno reprovado!`)
}








