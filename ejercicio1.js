        function encontrarPatron(cadena, patron) {
        let texto = cadena.toUpperCase();
        patron = patron.toUpperCase();
        let contador = 0;

        for (let i = 0; i <= texto.length - patron.length; i++) {
            if (texto.substring(i, i + patron.length) === patron) {
                contador++;
            }
        }
        return contador;
    }

    function totalPatrones(cadena, arrayPatrones) {
        let total = 0;
        for (let i = 0; i < arrayPatrones.length; i++) {
            total += encontrarPatron(cadena, patrones[i]);
        }
        return "Aparecen: " + total + " veces";
    }
    let cadena = prompt("Introduce una cadena de texto a verificar: ")
    let patrones = ["AA","BCA","RBT","JT"];

    alert("Cadena introducida: " + cadena);
    alert("Patrones a buscar: " + patrones);
    alert(totalPatrones(cadena, patrones));
