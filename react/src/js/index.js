import '../css/estilos.css';
import data from './teacher.json';

import React from 'react';
import {render} from 'react-dom';
import Teachers from './component/teachers';

render(<Teachers data={data}/>,document.getElementById('container'))
