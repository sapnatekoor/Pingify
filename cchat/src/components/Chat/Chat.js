import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import socketIo from "socket.io-client"
import "./Chat.css"

const Chat = () => {
    const ENDPOINT = "http://localhost:4500";

    const socket = socketIo(ENDPOINT, { transports: ["websocket"] });



    const location = useLocation();
    const { name } = location.state || {};
    useEffect(() => {
        socket.on("connect", () => {
            alert("Connected")
        })
        socket.emit(`joined`, { name })
        socket.on("welcome", (data) => {
            console.log(data.user, data.message)
        })
        socket.on("broadcast", (data) => {
            console.log(data.user, data.message)
        })
        socket.on("leave", (data)=>{
            console.log(data.user, data.message)
        })
        return ()=>{
          socket.disconnect()
        }
    }, [socket])

    return (
        <div className='chat-page'>
            <div className='chat-container'>
                <div className='chat-header'></div>
                <div className='chat-box'></div>
                <div className='chat-input'>
                    <input type='text' />
                    <button>send</button>
                </div>



            </div>


        </div>
    );
}

export default Chat;
