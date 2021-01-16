import React from 'react';
import "../Style/Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from './SidebarChat';
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar_headerRight">
                   <IconButton>
                       <DonutLargeIcon/>
                   </IconButton>
                   <IconButton>
                       <ChatIcon/>
                   </IconButton>
                   <IconButton>
                       <MoreVertIcon/>
                   </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                   <SearchOutlined />
                   <input placeholder="Search to start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                

            </div>

        </div>
    )
}

export default Sidebar;
