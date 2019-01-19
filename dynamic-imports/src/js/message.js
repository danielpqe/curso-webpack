import {render} from './render-to-dom';
const waitTime = new Promise((todoOk,todoMal)=>{
    setTimeout(()=>{
        todoOk('Pasaron 3 segundos');
    },3000)
})

var messages={
    firstMessage:'Hola mundo desde un módulo',
    delayedMessage: async ()=>{
        const message = await waitTime;
        const element = document.createElement('p');
        element.textContent=message;
        render.renderToDOM(element);
    }
}

export {messages};