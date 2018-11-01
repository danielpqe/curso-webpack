import '../css/estilos.css';
import image from '../images/platzi.png';
import { messages } from './message.js';
import data from './teacher.json';

console.log(data)
// let mes = new messages()
document.write(messages.firstMessage);
messages.delayedMessage();
data.teachers.forEach((t)=>{
    const element = document.createElement('li')
    element.textContent=t.name;
    document.body.append(element)

})


const img = document.createElement('img');
img.setAttribute('src',image);
    img.setAttribute('width',50);
img.setAttribute('height',50);

document.body.append(img);
