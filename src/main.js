import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './components/greeting/Greeting'
import Farewell from './components/farewell/Farewell'
import Layout from './components/__layout/Layout'

ReactDOM.render(
    <div>
         <Layout/>
    </div>,
   
   document.getElementById("app")
)