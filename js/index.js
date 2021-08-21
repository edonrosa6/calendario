const fecha = new Date();
const years = fecha.getFullYear();
const months = fecha.getMonth();
const days = fecha.getDate();

const dias = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

const nombreMes = meses[months];
const numeroDia = new Date().getDay();
const nombreDia = dias[numeroDia];


year = document.getElementById("year");
day = document.getElementById("day");
dayName = document.getElementById('nombreDia');
mesName = document.getElementById("nombreMes");

year.innerHTML = years;
day.innerHTML = days;
dayName.innerHTML = nombreDia;
mesName.innerHTML = nombreMes;