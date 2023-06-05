import _ from 'lodash';
import './estilo.css';
import Imagen from './imagen.png';

//integrar a la pag html un bloque div con texto de saludo
function componente(){
    const elemento=document.createElement('div')
    //lodash biblioteca externa
    elemento.innerHTML=_.join(['Hola','Webpack'],' ');
    elemento.classList.add('hola');
    const miImagen = new Image();
    miImagen.src=Imagen;
    elemento.appendChild(miImagen);
    return elemento;
}

document.body.appendChild(componente())