//1. Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
let num1 =  prompt ("Ingresa el primer número", 0) ;
let num2 =  prompt ("Ingresa el segundo número",0);
let num3 =  prompt ("Ingresa el tercer número",0) ;

//Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
//Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
//Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
if (num1==num2 && num2==num3){
    console.log('Los números son iguales');
    document.body.innerHTML = `<p>Todos los números son iguales: ${num1}, ${num2}, ${num3}</p>`;
}
    else {
        const numeros = [num1, num2, num3];
        const numOrdAs = numeros.slice().sort((a, b) => a - b );
        const numOrdDes = numeros.slice().sort((a,b) => b - a );

        console.log ('Orden de los números en forma ascendente:', numOrdAs);
        console.log ('Orden de los números en forma descendente:', numOrdDes);

        document.body.innerHTML = `
        <p>Números ordenados de menor a mayor: ${numOrdAs.join(", ")}</p>
        <p>Números ordenados de mayor a menor: ${numOrdDes.join(", ")}</p>
    `;

    }
