import { getGrettingMessage } from "./functions.js";

var myDate = new Date();
var hrs = myDate.getHours();

var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septimebre', 'Octubre', 'Noviembre', 'Diciembre'];

document.getElementById('greeting').innerHTML = getGrettingMessage(hrs);
document.getElementById('hour').innerHTML = `${hrs} : ${myDate.getMinutes()}`;
document.getElementById('day').innerHTML = `${days[myDate.getDay()]} ${myDate.getDate()} de ${months[myDate.getMonth()]} del ${myDate.getFullYear()}`;
console.log(myDate.getDate());
/* document.getElementById('day').innerHTML = myDate.; */