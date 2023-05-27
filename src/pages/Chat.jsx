import React, { useState  } from "react";
import spaceimg from '../Assets/space.png';
import sendIcon from '../Assets/send-icon.png';
import { useEffect } from 'react';
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import axios from "axios";

var stompClient =null;

const Chat = (props) => {


  const [data,setData]=useState([])
  const [user,setUser]=useState()
  const [privateChats, setPrivateChats] = useState(new Map());   
  const [tab,setTab] =useState();
  const [message,setMessage]=useState()
  // const [scroll,setScroll]=useState()

  const connect =()=>{
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({},onConnected, onError);
}
   
      
  const onConnected = () => {
    // setUserData({...userData,"connected": true});
    // stompClient.subscribe('/chatroom/public', onMessageReceived);
    stompClient.subscribe('/user/'+props.user.name+'/private', onRecive);
    // userJoin();
  }
  const onMessageChange=(event)=>{
    setMessage(event.target.value)

  }
  const onsubmit=()=>{
    
    if (stompClient) {
      var chatMessage = {
        senderName: props.user.name,
        receiverName:user.name,
        message: message,
        status:"MESSAGE"
      };
      if(privateChats.get(user.name)){

        privateChats.get(user.name).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      else{
        let list =[];
        list.push(chatMessage);
        privateChats.set(user.name,list);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setMessage("")
    }
  }

  const onRecive=(payload)=>{
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    if(privateChats.get(payloadData.senderName)){
        privateChats.get(payloadData.senderName).push(payloadData);
        setPrivateChats(new Map(privateChats));
    }else{
        let list =[];
        list.push(payloadData);
        privateChats.set(payloadData.senderName,list);
        setPrivateChats(new Map(privateChats));
    }
}
const onError = (err) => {
  console.log(err);
  
}

  const handleOnClick=(usero)=>{
    setUser(usero)
    
  }

  useEffect(()=>{
    
    axios.get(`http://localhost:8080/findFriendsById/${props.user.id}`)
    .then(response=>{
      setData(response.data)
    })
    connect();
  
  },[])



  return (
    <div className="dashboard-container chat-container">
      <div className="chat-lists-container">
        
        <div className="chat-list">
          {data.map((list) => (
            <div className="single-user" onClick={()=>{handleOnClick(list)}}>
              <div>
                <img src={list.mainImg} alt="" />
                <div>
                  <span>{list.nickname}</span>
                  <p>{list.bio}</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      {user ?     <div className="chat-field">
        <div className="online-user">
          <img src={user && user.mainImg} alt="" />
          <div>
            <span>{user && user.nickname}</span>
          </div>
          </div>

        <div className="chattings">
          <div className="buddy-chats" >
            
            {( user && privateChats.get(user.name))&& privateChats.get(user.name).map((element)=>{
              if(user.name ==element.senderName){

                return (     
                <> 
                      <div className="user-buddy-icon">
                  <img src={user} alt="" />
                  </div>
                  <p>
                  {element.message}
                  </p>
            
                </>
          )
              }
              else if(element.senderName==props.user.name){
                return(
<>
                  <div className="my-chat">
                              <p>{element.message}</p>
                            </div>
              
</>

                      )  
              }  
            })}
      </div>

        
        </div>

        <div className="send-message" >
            <div>
            <input type="text" name="" id="" placeholder="Write something" value={message} onChange={onMessageChange}/>
            <div>
            <button type="button" onClick={()=>{
              onsubmit();
        
              }}><img src={sendIcon} alt="" /></button>
            </div>
            </div>
        </div>
      </div> :<img src={spaceimg} className="space-img"/>}
  
    </div>
  );
};

export default Chat;
