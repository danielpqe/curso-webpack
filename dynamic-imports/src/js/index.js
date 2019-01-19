// import '../css/estilos.css';
import image from '../images/platzi.png';
import { messages } from './message.js';
import data from './teacher.json';

import React from 'react';
import {render} from 'react-dom';
import Teachers from './component/teachers';
// import '../css/main.less';

render(<Teachers data={data}/>,document.getElementById('container'))
