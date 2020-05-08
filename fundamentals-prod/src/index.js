import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById('root')
const container = React.createElement(
  'div',
  {},
  "Hello React",
  "Further child",
  "I am learning react",
  React.createElement(
    'a',
    { href: "#"},
    'Learn React'),
    "Hello World",
    React.createElement(
      'div',
      {},
      React.createElement(
        "p",
        {},
        "I am a paragraph")));

console.log(container);

render(container, root);

