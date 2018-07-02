import React from 'react';
import { render } from 'react-dom';
import Counter from './src/Counter.js';

render(
    (<Counter />),
    document.querySelector('#app')
);
