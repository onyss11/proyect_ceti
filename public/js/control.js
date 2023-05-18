import { updateTask, obtenerColeccion } from './firebase.js';

let dt; 
let bomba = document.querySelector('#bomba-toggle');
let automatico = document.querySelector('#automatico-toggle');
let led = document.querySelector('#led-toggle');
let humedy = document.querySelector('#humedy-text');


window.addEventListener('DOMContentLoaded', () => {

    function miCallback(data) {
        if (data !== null) {
            dt = data; 
            console.log("bs", dt[2].status); 
            let stP = dt[2].status;      
            
            console.log("bs led", dt[1].power);
            let ldP = dt[1].power;

            humedy.innerText = dt[3].humidity + ' %';

            if (stP){
                bomba.checked = stP;
                bomba.addEventListener('change', function(){
                    stP = this.checked;
                })
                
            }else if(!stP){
                bomba.checked = stP;
                bomba.addEventListener('change', function(){
                    stP = this.checked;
                })
            }

            if(ldP){
                led.checked = ldP;
                led.addEventListener('change', function(){
                    ldP = this.checked;
                })
            }else if(!ldP){
                led.checked = ldP;
                bomba.addEventListener('change', function(){
                    ldP = this.checked;
                })
            }

            // bomba.addEventListener('change', function(){
            //     this.checked = dt[2].status;
            // });
            // checkDb(dt[1].power);
        
            // console.log('Datos obtenidos:', data);
            // Realiza las acciones deseadas con los datos de la colección en tiempo real
        } else {
            console.log('Error al obtener el dato.');
        }
    }
    
    // Llama a la función para obtener los datos de la colección en tiempo real
    obtenerColeccion(miCallback);
    
    // function bomba(dt){
    //     window.onload = function() {
    //         bomba.checked = 0;
    //     }
    // }
    
    
    bomba.addEventListener('change', function(){
        if (this.checked) {
            let newFields = {'status' : true}

            updateTask('pump', newFields)
        }else{
            let newFields = {'status' : false}

            updateTask('pump', newFields)
        }
    });
    
    led.addEventListener('change', function(){
        if (this.checked) {
            let newFields = {'power' : true}

            updateTask('lights', newFields)
        }else{
            let newFields = {'power' : false}

            updateTask('lights', newFields)
        }

});

});



console.log(bomba.checked);