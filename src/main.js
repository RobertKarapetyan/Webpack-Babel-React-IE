import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './components/greeting/Greeting'

ReactDOM.render(
    <Greeting caller={'main.js'} />,
    document.getElementById("app")
);