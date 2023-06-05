import _ from 'lodash';
//integrar a la pag html un bloque div con texto de saludo
function componente(){
    const elemento=document.createElement('div')
    //lodash biblioteca externa
    elemento.innerHTML=_.join(['Hola','Webpack'],' ');
    return elemento;
}

document.body.appendChild(componente())