import React from "react";
import profile from '../Assets/profile.png';
import home from '../Assets/home-icon.png';
// import setting from '../Assets/setting-icon.png';
import user from '../Assets/user1.png';
import { NavLink } from "react-router-dom";
import './Sidebar.css';

const Sidebar = (props) => {
  console.log(props);
  

  return (
    <div className="sidebar-container">
      <div>
        <div className="user">
          <img src={props.data.mainImg} alt="" />
          <span>{props.data.nickname}</span>
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
