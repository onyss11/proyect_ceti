var days_array, hour_start, hour_end, humedy_value;
var temp_array, wind_array, hour_array;
var notify_toggle;

document.querySelector('#save-btn').addEventListener('click', function (){
    days_array = getData(document.querySelector('#days'));
    hour_start = document.querySelector('#hour-start').value;
    hour_end = document.querySelector('#hour-end').value;
    humedy_value = document.querySelector('#humedy-value').value;

    temp_array = getData(document.querySelector('#units-temp'));
    wind_array = getData(document.querySelector('#units-wind'));
    hour_array = getData(document.querySelector('#units-hour'));

    notify_toggle =  document.querySelector('#notification-toogle').checked;
    console.log(notify_toggle);
});


function getData(htmlContainer){
    var units = [];
    for (var i = 0; i < htmlContainer.children.length; i++) {
        if (htmlContainer.children[i].children[0].checked == true) {
            units.push(i);
        }
    }
    return units;
}