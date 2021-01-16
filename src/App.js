import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import Pusher from "pusher-js";
import axios from './axios';
import Login from './Components/Login';
import { useStateValue } from "./Components/StateProvider";

function App() {
  const [messages, setMessages] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect( () => {
     axios.get('/messages/sync')
     .then(response => {
       setMessages(response.data);
     })
  }, []);

  useEffect( () => {
    const pusher = new Pusher('32a96f39aef4bc0b901d', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
     // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  //console.log(messages);


  /*const login = (username)=>{
    setUser(username);
  }*/
  return (
    //BEM naming convention
    <div className="app">
      {!user? (
        <Login />
      ):(
        <div className="app__body">
          <Sidebar />
          <Chat messages={messages} /> 
        </div>
      )
      }
    </div>
  );  
 
}

export default App;
