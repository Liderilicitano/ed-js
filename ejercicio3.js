let numeros = [];
do{
    comodin= parseInt(prompt("Introduce números positivos (0 o negativo para terminar) : "));
    if(comodin > 0){
    numeros.push(comodin);
    }
}while(comodin > 0);

if(numeros.length > 0){
let numerosPares = 0;
let numerosImpares = 0;
let sumaTotal= 0;
let Media;
let Mayor = numeros[0];
let Menor = numeros[0];

for(let i = 0;i<numeros.length;i++){
    if(Mayor < numeros[i]){
        Mayor = numeros[i];
    }
    if(Menor > numeros[i]){
        Menor = numeros[i];
    }
    if(numeros[i] % 2 == 0){
        numerosPares++;
    }else{
        numerosImpares++;
    }
    sumaTotal += numeros[i];
}

Media = sumaTotal/numeros.length;

alert("Lista de números introducidos: " + numeros);
alert("Números Pares: " + numerosPares);
alert("Números Impares: " + numerosImpares);
alert("Suma total: " + sumaTotal);
alert("Media: " + Media);
alert("Mayor: " + Mayor);
alert("Menor: " + Menor);

}else{

alert("No se ha introducido ningún número válido");

}