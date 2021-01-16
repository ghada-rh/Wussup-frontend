import React , { useState, useEffect} from 'react';
import "../Style/Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {AttachFile, Message, MoreVert, SearchOutlined} from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from '../axios';
import { useStateValue } from "./StateProvider";
import firebase from "firebase";

const Chat = ({messages})=> {
    const [input, setInput] = useState("");
    const [{user}, dispatch] = useStateValue();
    const [randomId, setRandomId] = useState("");

//to get a random id
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
//to get a random profil picture    
    useEffect( ()=>{
        setRandomId(getRandomInt(1, 70));
    }, []);

    const sendMessage = async (e) =>{
        e.preventDefault();
        await axios.post('/messages/new', {
            message: input,
            name: user.displayName,
            timestamp: new Date().toUTCString(),
            received: false,
        });

        setInput('');
     }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src ={`https://i.pravatar.cc/150?img=${randomId}`} />
                <div className="chat__headerInfo">
                   <h3>Room name</h3>
                   <p>last seen at..</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                    
                </div>
            </div>
            <div className="chat__body">
                {messages.map( (message, id)=>(
                    <p key ={id} className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                    <span className="chat__name">{message.name.substr(0, message.name.indexOf(" "))} </span>
                        {message.message}
                    <span className="chat__timestamp">
                        {message.timestamp}
                     </span>
                    
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                       value={input}
                       onChange={ (e)=> setInput(e.target.value)}
                       placeholder="Type a message"
                       type="text"
                    />
                    <button  onClick={sendMessage}
                    type="Submit">
                          Send messsage
                    </button>
                </form>
                 <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
