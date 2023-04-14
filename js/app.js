// Variables globales
let cronometro;
let tiempo = 0;
let isRunning = false;

// Función para actualizar el cronómetro
function actualizarCronometro() {
  tiempo++;
  let horas = Math.floor(tiempo / 3600);
  let minutos = Math.floor((tiempo % 3600) / 60);
  let segundos = tiempo % 60;
  document.getElementById('cronometro').textContent = (horas < 10 ? '0' : '') + horas + ':' + (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
}

// Evento click en el botón "Iniciar"
document.getElementById('btnIniciar').addEventListener('click', function() {
  if (!isRunning) {
    cronometro = setInterval(actualizarCronometro, 1000);
    isRunning = true;
  }
});

// Evento click en el botón "Pausar"
document.getElementById('btnPausar').addEventListener('click', function() {
  if (isRunning) {
    clearInterval(cronometro);
    isRunning = false;
  }
});

// Evento click en el botón "Reset"
document.getElementById('btnReset').addEventListener('click', function() {
  clearInterval(cronometro);
  tiempo = 0;
  isRunning = false;
  document.getElementById('cronometro').textContent = '00:00:00';
});