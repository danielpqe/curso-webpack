import '../css/estilos.css';
import image from '../images/platzi.png';
import videos from '../videos/que-es-core.mp4';

import { messages } from './message.js'
// let mes = new messages()
document.write(messages.firstMessage);
messages.delayedMessage();

const img = document.createElement('img');
img.setAttribute('src',image);
    img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img);

const video = document.createElement('video');
video.setAttribute('src',videos);
video.setAttribute('autoplay',true);
video.setAttribute('controls',true);

video.setAttribute('width',500);

document.body.append(video);
