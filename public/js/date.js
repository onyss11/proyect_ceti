var myDate = new Date();
var hrs = myDate.getHours();

var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septimebre', 'Octubre', 'Noviembre', 'Diciembre'];

var interval = setInterval(updateDate, 1000);

function updateDate(){
    var date;
    date = new Date();

    var time =document.getElementById('date-hour-now');
    time.innerHTML = date.toLocaleTimeString('en-US');
    document.getElementById('date-greeting').innerHTML = getGrettingMessage(hrs); //Mensaje de saludo, dependiendo la hora.
    document.getElementById('date-today').innerHTML = `${days[date.getDay()]} ${date.getDate()} de ${months[date.getMonth()]} del ${date.getFullYear()}`; //Imprime la fecha
}

function getGrettingMessage(hrs){
    var message = "";
    if (hrs >= 5 && hrs <= 11) {
        message = "Buenos dias"
    }else if(hrs >= 12 && hrs <= 19) {
        message = "Buenas Tardes"
    }else{
        message = "Buenas Noches";
    }

    return message;
}

var minFormatter =  myDate.getMinutes < 10 ? '0' + hrs : hrs;  


// document.getElementById('date-hour-now').innerHTML = `${hrs} : ${minFormatter}`; //Imprime la hora


document.getElementById('day-2').innerText = days[myDate.getDay()+1];
document.getElementById('day-3').innerText = days[myDate.getDay()+2];
document.getElementById('day-4').innerText = days[myDate.getDay()+3];
document.getElementById('day-5').innerText = days[myDate.getDay()+4];
