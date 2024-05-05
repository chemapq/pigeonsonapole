
import Pole from './components/Pole';
import './App.css';
import { useEffect, useState } from 'react';
import tmi from 'tmi.js'


function App() {
const [chatters,setNewChatter] = useState([])
const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  channels: [ 'zfg1' ]
})

useEffect(()=>{
  client.connect()
  client.on('message', (channel, tags, message, self) => {
    if(chatters.includes(tags['display-name'])){
      console.log('contains')
      //pop up bubble
    }
    else{
      console.log('doesnt contain')
      setNewChatter(chatterMap=>[...chatterMap,tags['display-name']])
    }
  
  })
console.log(chatters)

client.disconnect()

},[])






  return (
    <div className="App">
      <h1>Welcome to the epic pigeons on a pole app!</h1>
      <Pole />
    </div>
  );
}

export default App;
