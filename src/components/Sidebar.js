import React from "react";
import profile from '../Assets/profile.png';
import home from '../Assets/home-icon.png';
import './Sidebar.css';

const Sidebar = (props) => {
 

  return (
    <div className="sidebar-container">
      <div>
        <div className="user">
          <img src={props.user.mainImg} alt="" />
          <span>{props.user.nickname}</span>
        </div>

        <ul className="sidebar-icons">
          
        <li onClick={()=>props.setPage("Dashboard")}>      
              <img src={profile} alt="" />
           
          </li>
          <li onClick={()=>props.setPage("Chat")}>  
              <img src={home} alt="" />
           
          </li>
          
        </ul>

      </div>
    </div>
  );
};

export default Sidebar;
