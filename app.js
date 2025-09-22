// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables 
let listaAmigos = [];           
let listaNombresSorteados = [];
let amigoSecreto = '';          
let numeroMaximo = 1;           
let intentos = 0;               

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}


function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();

    if (nombre === '') {
        alert('Por favor ingresa un nombre válido.');
        return;
    }

    listaAmigos.push(nombre);
    intentos++;

    
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        listaHTML.innerHTML += `<li>${listaAmigos[i]}</li>`;
    }

    limpiarCaja();
}


function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Debes agregar al menos un nombre antes de sortear.');
        return;
    }

   
    let indice = Math.floor(Math.random() * listaAmigos.length);

   
    if (listaNombresSorteados.length === listaAmigos.length) {
        asignarTextoElemento('#resultado','Ya se sortearon todos los nombres posibles');
        return;
    }

    if (listaNombresSorteados.includes(indice)) {
        return sortearAmigo();
    } else {
        listaNombresSorteados.push(indice);
        amigoSecreto = listaAmigos[indice];
        asignarTextoElemento('#resultado', `🎉 El amigo secreto es: ${amigoSecreto}`);
    }
}


function condicionesIniciales() {
    asignarTextoElemento('h1','Amigo Secreto');
    asignarTextoElemento('#resultado','Agrega nombres y realiza el sorteo');
    intentos = 0;
}


function reiniciarJuego() {
    listaAmigos = [];
    listaNombresSorteados = [];
    amigoSecreto = '';
    limpiarCaja();
    document.querySelector('#listaAmigos').innerHTML = '';
    condicionesIniciales();
}


condicionesIniciales();