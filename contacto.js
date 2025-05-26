/* contacto.js */
// script externo para validar y enriquecer la página de contacto

// Declarar variables
var form = document.getElementById('contactForm');
var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var mensaje = document.getElementById('mensaje');
var contador = document.getElementById('contador');
var btnEnviar = document.getElementById('btnEnviar');

// Array para almacenar envíos (simulación)
var envios = [];

// Escuchar eventos
mensaje.addEventListener('input', actualizarContador);
form.addEventListener('input', comprobarFormulario);
form.addEventListener('submit', procesarEnvio);

// Función: actualizar contador de caracteres (operador length)
function actualizarContador() {
    var len = mensaje.value.length; // uso de length
    contador.innerText = 'Caracteres: ' + len + ' / 500'; // concatenación
    if (len > 500) {
        contador.style.color = 'red';
        btnEnviar.disabled = true;
    } else {
        contador.style.color = '';
    }
}

// Función: habilitar botón si todos los campos tienen valor (AND lógico)
function comprobarFormulario() {
    if (nombre.value.trim().length > 0 && email.value.indexOf('@') !== -1 && mensaje.value.trim().length > 0 && mensaje.value.length <= 500) {
        btnEnviar.disabled = false; // habilitar
    } else {
        btnEnviar.disabled = true; // deshabilitar
    }
}

// Función: simular envío y uso de array methods
function procesarEnvio(event) {
    event.preventDefault(); // prevenir envío real
    // Crear objeto con datos
    var envio = {
        nombre: nombre.value,
        email: email.value,
        asunto: document.getElementById('asunto').value,
        mensaje: mensaje.value
    };
    // Añadir al array
    envios.push(envio); // push()
    alert('Mensaje enviado con éxito. ¡Gracias, ' + envio.nombre.toUpperCase() + '!'); // toUpperCase() y escape \n

    // Limpiar campos (pop/shift ejemplos omitidos)
    form.reset(); // reset()
    contador.innerText = 'Caracteres: 0 / 500';
    btnEnviar.disabled = true;
}

// Función: regresar con mensaje de confirmación
function regresarInicio() {
    var confirmacion = confirm('¿Seguro que deseas regresar al inicio?'); // confirm()
    if (confirmacion) {
        window.location.href = 'index.html'; // asignación src
    }
}
