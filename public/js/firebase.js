// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEVxmsEDClNs6zX30Bsn2fnXEzZCC2PP0",
    authDomain: "greengarden-1b051.firebaseapp.com",
    projectId: "greengarden-1b051",
    storageBucket: "greengarden-1b051.appspot.com",
    messagingSenderId: "323056410193",
    appId: "1:323056410193:web:59f8d8b9c9af740269e270"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export function obtenerColeccion(callback) {
  // Obtiene una referencia a la colección que deseas traer
  const coleccionRef = collection(db, 'GardenActions');

  // Escucha los cambios en la colección en tiempo real
  onSnapshot(coleccionRef, (snapshot) => {
    const coleccionData = [];
    snapshot.forEach((doc) => {
      // Obtiene los datos de cada documento en la colección
      const data = doc.data();
      coleccionData.push(data);
    });

    // Llama al callback con los datos de la colección
    callback(coleccionData);
  });
}



//Get data real time (Return Data)
// export function obtenerDatoEspecifico(documents, callback) {
  //   export function obtenerDatoEspecifico(callback) {
    
//     const docRef = doc(db, 'GardenActions');

//     return onSnapshot(docRef, (docSnapshot) => {
//       if (docSnapshot.exists()) {
//         // Accede a los datos del documento específico
//         callback(docSnapshot.data());
//       } else {
//         console.log('El documento no existe.');
//         callback(null);
//       }
//     }, (error) => {
//       console.error('Error al obtener el dato:', error);
//       callback(null);
//     });
// }





//Update data
export const updateTask = (id, newFields) => updateDoc(doc(db, "GardenActions", id), newFields);


  

//Get data real time (READ)
  // export function realGetData (){
  //     const docRef = doc(db, 'GardenActions', 'lights');
  //     
  //      onSnapshot(docRef, (doc) => {
  //         if (doc.exists()) {
  //             const data = doc.data().power;
  //             console.log("Current data: ", data);
  //         } else {
  //             console.log('El documento no existe.');
  //         }
          
  //     })
  // }


//Get data one time
// export function getData() {
    
//     const docRef = doc(db, 'GardenActions', 'lights');

//     getDoc(docRef).then((docSnapshot) => {
//     if (docSnapshot.exists()) {
//       const power = docSnapshot.data().power;
//       console.log('Valor de power:', power);
//     } else {
//       console.log('El documento no existe.');
//     }
//   })
//   .catch((error) => {
//     console.error('Error al obtener el documento:', error);
//   });

// }


