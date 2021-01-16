import React, { useEffect, useState } from 'react';
import '../Style/SidebarChat.css';
import { Avatar } from "@material-ui/core";

function SidebarChat({addNewChat}) {
    const [seed, setSeed] = useState("");
    
    useEffect( ()=>{
       setSeed(Math.floor(Math.random()* 5000));
    }, []);
    
    const createNewChat = () =>{

    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                
            <div className="sidebarChat__info">
               <h2>Room name</h2>
               <p>last msg</p>
            </div>
        </div>
    ):
    (
        <div className="sidebarChat" onClick={createNewChat}>
            <h2>Add New Chat</h2>

        </div>
    )
}

export default SidebarChat;
