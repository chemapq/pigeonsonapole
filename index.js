import tmi from 'tmi.js'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  channels: [ 'poponut' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  console.log(`${tags['display-name']}: ${message}`);


});

