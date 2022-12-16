

export {generateGrahp};

function generateGrahp() {
    const grafica = document.createElement("canvas");
    const etiquetas = "Usuarios";
    const datos = {
        label: "Ventas por mes",
        data: [1, 2, 3, 4], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1,// Ancho del borde
    };

    new Chart(grafica, {
        type: 'line',// Tipo de gráfica
        data: {
            labels: etiquetas,
            datasets: [
                datos
                // Aquí más datos...
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
}

function historicoUsuarios() {
    
}