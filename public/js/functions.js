function getGrettingMessage(hrs){
    var message = "";
    if (hrs >= 5 && hrs <= 12) {
        message = "Buenos dias"
    }else if(hrs >= 6 && hrs <= 19) {
        message = "Buenas Tardes"
    }else{
        message = "Buenas Noches";
    }

    return message;
}

export{getGrettingMessage};