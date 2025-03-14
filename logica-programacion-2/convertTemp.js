function solicitarTemperatura() {
    let tempCelsius = prompt("Ingrese la temperatura en grados Celsius (sólo datos numéricos):");

    // Validar si el dato ingresado es un número
    while (isNaN(tempCelsius) || tempCelsius.trim() === "") {
        alert("El dato ingresado no es un número válido. Inténtelo de nuevo.");
        tempCelsius = prompt("Ingrese la temperatura en grados Celsius (sólo datos numéricos):");
    }

    // Convertir a número
    tempCelsius = parseFloat(tempCelsius);

    // Realizar las conversiones
    const fahrenheit = (tempCelsius * 9/5) + 32;
    const kelvin = tempCelsius + 273.15;

    // Mostrar resultados en consola y en el DOM
    console.log(`La temperatura en °F es: ${fahrenheit.toFixed(2)} °F`);
    console.log(`La temperatura en °K es: ${kelvin.toFixed(2)} °K`);

    document.body.innerHTML = `
        <p>La temperatura ingresada en grados Celsius es: ${tempCelsius} °C</p>
        <p>La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)} °F</p>
        <p>La temperatura en Kelvin es: ${kelvin.toFixed(2)} °K</p>
    `;
}

// Llamar a la función
solicitarTemperatura();