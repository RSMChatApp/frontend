import React, { useState } from 'react';
import banner from '../Assets/banner.png';
import profile1 from "../Assets/profile1.png";
import profile2 from "../Assets/profile2.png";
import profile3 from "../Assets/profile3.png";
import icon1 from "../Assets/user3.png";
import icon2 from "../Assets/user4.png";
import icon3 from "../Assets/user5.png";
import user from"../Assets/user.png"
import add from '../Assets/add-user-icon.png';
import searchIcon from '../Assets/search-icon.png';
import fillerImg from "../Assets/pexels-david-bartus-1166209.jpg"
import { useEffect } from 'react';
import axios from 'axios';
const Dashboard = (props) => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/users')
        .then((response)=>{
           setUsers( response.data)
        })
    },[])
    const handleOnClick=(profile)=>{
        //dynamic setting values
       axios.post('http://localhost:8080/addfriend',  
       {us1: props.user.id,
       us2:profile.id}
       )
    
    }



    return (<>

        <div className='dashboard-container'>

            <div className='banner'>
                <img src={banner} alt="" />

                
                
            </div>

            <div className='profiles-container'>
                {
                    users.filter(profile=>profile.name != props.user.name).map(profile=>{
                        return(
                            <div>
                            {profile.imgCover ==null &&<img src={fillerImg} className='img-cover' alt="" /> } 
                            {profile.imgCover !=null &&<img src={profile.imgCover} className='img-cover' alt="" /> } 
                            
    
                            <div>
                                <div>
                            {profile.mainImg ==null &&<img src={user} className='img-main' alt="" /> } 
                            {profile.mainImg !=null &&<img src={profile.mainImg} className='img-main'  alt="" /> }
                                    
                                <span>{profile.nickname}</span>
                                </div>
                                <div className="add-icon">
                                <button onClick={()=>handleOnClick(profile)}><img src={add} alt=""  /></button>
                                </div>
                            </div>
                        </div>
                        )
                       
                    })
                
                        }
                    
                 
            </div>
        </div>
        </>
    );
};

export default Dashboard;