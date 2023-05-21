import React from "react";
import searchIcon from "../Assets/search-icon.png";
import user1 from "../Assets/user3.png";
import user2 from "../Assets/user4.png";
import user3 from "../Assets/user5.png";
import user4 from "../Assets/user2.png";
import online from "../Assets/ellips.png";
import offline from "../Assets/ellipse2.png";
import user from "../Assets/user2.png";
import sendIcon from '../Assets/send-icon.png';

const Chat = () => {
  const chatLists = [
    {
      user: user1,
      name: "Andrew mcnullty",
      bio: "feeling inspired",
      status: "Online",
      icon: online,
    },
    {
      user: user2,
      name: "Tomas Tesla",
      bio: "new me :)",
      status: "Online",
      icon: online,
    },
    {
      user: user3,
      name: "Orange Cat",
      bio: "Meow",
      status: "Online",
      icon: online,
    },
    {
      user: user4,
      name: "lulu peter",
      bio: "no pain no gain",
      status: "Offline",
      icon: offline,
    },
    {
      user: user2,
      name: "The Hunter",
      bio: "*^*",
      status: "Online",
      icon: online,
    },
  ];
  return (
    <div className="dashboard-container chat-container">
      <div className="chat-lists-container">
        <div className="search-chat">
          <input type="text" name="" id="" placeholder="Chats" />
          <div>
          <button type="submit">
            <img src={searchIcon} alt="" />
          </button>
          </div>
        </div>

        <div className="chat-list">
          {chatLists.map((list) => (
            <div className="single-user">
              <div>
                <img src={list.user} alt="" />
                <div>
                  <span>{list.name}</span>
                  <p>{list.bio}</p>
                </div>
              </div>
              <div>
                <span>{list.status}</span>
                <img src={list.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-field">
        <div className="online-user">
          <img src={user} alt="" />
          <div>
            <span>The Hunter</span>
            <p>Online</p>
          </div>
        </div>

        <div className="chattings">
          <div className="buddy-chats">
            <div className="user-buddy-icon">
            <img src={user} alt="" />
            </div>
            <p>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
            </p>
          </div>

          <div className="my-chat">
            <p>ok</p>
          </div>
        </div>

        <div className="send-message">
            <div>
            <input type="text" name="" id="" placeholder="Write something"/>
            <div>
            <button type="submit"><img src={sendIcon} alt="" /></button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
