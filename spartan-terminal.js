// spartan-terminal.js - Terminal SPARTAN Interactiva 🔧⚡

// ▸ Decodifica el nombre del Spartan ingresado
function decodificarSpartan() {
  var nombre = document.getElementById("nombreJugador").value.trim(); // Eliminamos espacios extras
  var fragmentado = nombre.split("").join(" ");

  // Escape de comillas en nombre si existiera
  var nombreSeguro = nombre.replace(/\"/g, '\\"');

  // Validación básica
  if (nombre === "") {
    document.getElementById("outputNombre").innerHTML =
      "⚠️ [UNSC] Error: se requiere ingresar un identificador Spartan.";
    return;
  }

  var mensaje = `
    ▸ Código de acceso: <strong>${nombre.toUpperCase()}</strong><br>
    ▸ Caracteres registrados: ${nombre.length}<br>
    ▸ Fragmento encriptado: ${fragmentado}<br>
    ▸ Estado: IDENTIDAD VERIFICADA ✅
  `;
  document.getElementById("outputNombre").innerHTML = mensaje;
}

// ▸ Simula una evaluación de combate
function evaluarCombate() {
  var kills = Math.floor(Math.random() * 50) + 10;
  var headshots = Math.floor(Math.random() * kills);
  var precision = (headshots / kills) * 100;

  // Evaluación según precisión
  var estado = "";
  if (precision >= 70) estado = "EXCELENTE";
  else if (precision >= 40) estado = "ACEPTABLE";
  else estado = "DEFICIENTE";

  var mensaje = `
    ▸ Bajas confirmadas: ${kills}<br>
    ▸ Disparos a la cabeza: ${headshots}<br>
    ▸ Precisión Spartan: ${precision.toFixed(1)}%<br>
    ▸ Rango de eficiencia: <strong>${estado}</strong>
  `;
  document.getElementById("outputCombate").innerHTML = mensaje;
}

// ▸ Clasifica al Spartan por edad (prompt)
function clasificarSpartan() {
  var edad = prompt("🧬 Introduce edad biológica del Spartan:");
  var tipo = "";

  if (isNaN(edad)) {
    document.getElementById("outputClasificacion").innerHTML =
      "⚠️ Entrada no válida. Se esperaba un valor numérico.";
    return;
  }

  edad = parseInt(edad);

  if (edad < 18) tipo = "Recluta (en entrenamiento)";
  else if (edad <= 30) tipo = "SPARTAN-II (élite)";
  else if (edad <= 45) tipo = "SPARTAN-III (experimentado)";
  else tipo = "Veterano - ODST";

  document.getElementById("outputClasificacion").innerHTML =
    `▸ Clasificación asignada: <strong>${tipo}</strong> 🛡️`;
}

// ▸ Despliega armas del inventario SPARTAN
function verArsenal() {
  var arsenal = ["MA5C", "BR55", "Espada de Energía", "Lanzallamas", "Sniper SRS99", "Cañón Gauss"];
  arsenal.unshift("Pistola M6G");
  arsenal.push("Lanzacohetes SPNKr");

  var listado = arsenal.map((arma, i) => `#${i + 1}: ${arma}`).join("<br>");

  var mensaje = `
    ▸ Inventario Táctico:<br>${listado}<br>
    ▸ Total de armas: ${arsenal.length}
  `;
  document.getElementById("outputArsenal").innerHTML = mensaje;
}

// ▸ Valida número de protocolo ingresado
function validarProtocolo() {
  var valor = document.getElementById("numeroDato").value;

  if (isNaN(valor) || valor.trim() === "") {
    document.getElementById("outputValidacion").innerHTML =
      "🚨 Entrada inválida. Ingrese un número UNSC válido.";
  } else {
    var resultado = parseInt(valor) % 2 === 0 ? "PROTOCOLO CLASE 2 - ACTIVO" : "PROTOCOLO CLASE 1 - VIGILADO";
    document.getElementById("outputValidacion").innerHTML =
      `✔️ Protocolo ${valor} verificado.<br>🔒 Estado: ${resultado}`;
  }
}
