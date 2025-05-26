// script.js - Funciones de interacción y manipulación del DOM

// Declaración de variable global con var
var recursos = [
    {tipo: 'foro', titulo: 'Foro Oficial de Halo', url: 'https://www.halowaypoint.com'},
    {tipo: 'red', titulo: 'Twitter Oficial', url: 'https://www.twitter.com/Halo'},
    {tipo: 'red', titulo: 'Instagram Oficial', url: 'https://www.instagram.com/halo'},
    {tipo: 'evento', titulo: 'Eventos y Torneos', url: 'https://halo.fandom.com/es/wiki/Categor%C3%ADa:Foro'}
];

// Función inicial
function inicializarPagina() {
    // Saludo dinámico según la hora
    var fecha = new Date(); // fecha actual
    var hora = fecha.getHours(); // operador punto y getHours()
    var saludoTexto;
    if (hora < 12) {
        saludoTexto = "¡Buenos días, Spartan!";
    } else if (hora < 18) {
        saludoTexto = "¡Buenas tardes, Spartan!";
    } else {
        saludoTexto = "¡Buenas noches, Spartan!";
    }
    document.getElementById('saludo').innerText = saludoTexto;
    
    // Poblamos recursos inicialmente
    mostrarRecursos(recursos);
}

// Mostrar lista de recursos en el contenedor
function mostrarRecursos(lista) {
    var cont = document.getElementById('recursoList');
    cont.innerHTML = ''; // limpieza

    // Recorrer arreglo con for y operadores de índice
    for (var i = 0; i < lista.length; i++) {
        var res = lista[i]; // asignación
        // Construir HTML usando concat y escape
        var card = '<div class="comunidad-item">'
                 + '<h3>' + res.titulo.toUpperCase() + '</h3>' // toUpperCase()
                 + '<p>Tipo: ' + res.tipo.charAt(0).toUpperCase() + res.tipo.substring(1) + '</p>' // charAt(), substring()
                 + '<a href="' + res.url + '" target="_blank">Visitar</a>'
                 + '</div>';
        cont.innerHTML += card; // concatenación con asignación
    }
}

// Filtrar recursos por tipo: foro, red, evento o todo
function filtrarRecursos(tipo) {
    var filtrados;
    if (tipo === 'todo') {
        filtrados = recursos;
    } else {
        // Uso de filter, operadores lógicos y relacionales
        filtrados = recursos.filter(function(item) {
            return item.tipo === tipo; // igualdad
        });
    }
    mostrarRecursos(filtrados);
}

// Ejemplo de operación con número y NaN
function ejemploOperacion() {
    var x = 10;
    var y = '5';
    var suma = x + Number(y); // operador + y conversión
    var z = Number('hola'); // convierte a NaN
    console.log('Suma:', suma, 'NaN?', isNaN(z)); // isNaN()
}

// Mostrar mensaje con mecanismo de escape
function mostrarMensajeEscape() {
    var mensaje = 'Regresando al inicio de Halo Universe...\n¡Sigue avanzando, Spartan!'; // 
    alert(mensaje); // salto de línea con \n
}
