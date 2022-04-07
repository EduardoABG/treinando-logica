//1
let nomeCompleto = "Eduardo Augusto Broetto Giacomin";

console.log(nomeCompleto);

//2

let numeroA = 5;
let numeroB = 8;
let resultado = numeroA * numeroB;
console.log(resultado);

//3

function saudacao(){ 
    return "Oi eu sou Goku";
}
console.log(saudacao());

//4

function multiplica(a, b) {
    multi = a * b;
    return multi;
}

console.log(multiplica(2,3));

//5

let idade = 18;

function podeDirigir(idade) {
    if (idade >= 18) {
        console.log("Você pode dirigir")
    }else{
        console.log("Você não pode dirigir")
    }
}

podeDirigir(idade);
//6

for (let i = 0; i <= 20; i++) {
    console.log(i); 
}

//7

for (let i = 0; i <= 20; i++) {
    if ((i%2) != 0) {
       console.log(i);  
    } 
}

//8

function tabuada(num){
    for (let i = 0; i <= 10; i++) {
        console.log(num * i)
    }
}

tabuada(5);

//9

function converterEmHoras(minutos){
    let horas = 0;
    if (minutos >= 60) {
        horas = minutos/60;
    }
    return horas;
}

console.log(converterEmHoras(190));

