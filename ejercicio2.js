function esPrimo(numero){
	for(let i = 2; i<numero;i++){
		if(numero%i === 0){
			return false;
		}
	}
	return true;
}
function esPalindromo(cadena){
	let invertida = cadena.split("").reverse().join("");
	return cadena === invertida;
}

let X;
X = parseInt(prompt("Introduce el numero X (se comprobará desde 1 a X):"));

let primos = [];
let palíndromos = [];
let primosYPalindromos = [];

for (let i=1; i <=X; i++){
	let primo = esPrimo(i);
	let palíndromo = esPalindromo(i.toString());
if(primo){
	primos.push(i);
}
if(palíndromo){
	palíndromos.push(i);
}
if(primo && palíndromo){
	primosYPalindromos.push(i);
}
}
alert("Números primos:\n" + primos);
alert("Números palíndromos:\n" + palíndromos.join(", "));
alert("Números que son primos y palíndromos:\n" + primosYPalindromos.join(", "));
