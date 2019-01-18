import {render} from './render-to-dom';
import makeMessage from './make-message';

const waitTime = new Promise((todoOk,todoMal)=>{
    setTimeout(()=>{
        todoOk('Pasaron 3 segundos omg');
    },3000)
})

var messages={
    firstMessage:'Hola mundo desde un módulo',
    delayedMessage: async ()=>{
        const message = await waitTime;
        //const element = document.createElement('p');
        //element.textContent=message;
        render.renderToDOM(makeMessage(message));
    }
}

export {messages};