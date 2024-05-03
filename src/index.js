import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import tmi from 'tmi.js'
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



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
