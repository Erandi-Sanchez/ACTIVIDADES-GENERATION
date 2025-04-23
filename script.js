//Función para factorizar
function factorizar (num){
    var factorial=1;
    for(var i=1; i<=num; i++){
        factorial = factorial*i;
    } 
    return factorial;
}


//Función para pedor un número 
function pedirNumero(){
    let numero ;
    let entrada;
    do {
        let entrada = prompt("Introduce un número entero positivo:");
        numero = Number(entrada);

        if (isNaN(numero) || !Number.isInteger(numero) || numero < 0 || entrada === "") {
        alert("Entrada no válida. Por favor, introduce un número entero positivo.");
        }

    } while (isNaN(numero) || !Number.isInteger(numero) || numero < 0 || entrada === "");

    let resultado = factorizar(numero);
    console.log("El factorial de " + numero + " es: " + resultado);
    alert("El factorial de " + numero + " es: " + resultado);
    }

    // Llamamos a la función para iniciar el proceso
    pedirNumero();


