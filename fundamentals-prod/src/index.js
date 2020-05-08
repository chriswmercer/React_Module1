import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById('root')
const container = React.createElement('div', {}, "Hello React");

render(container, root);

