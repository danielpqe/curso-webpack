import './estilos.css';
import image from './platzi.png';

import { messages } from'./message.js'
// let mes = new messages()
document.write(messages.firstMessage);
messages.delayedMessage();

const img = document.createElement('img');
img.setAttribute('src',image);
    img.setAttribute('width',50);
img.setAttribute('height',50);

document.body.append(img);
