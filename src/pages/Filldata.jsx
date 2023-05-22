import React from 'react'
import './filldata.css'
import axios from 'axios'
import { useState } from 'react'
import Dashboard from './Dashboard'
import Sidebar from '../components/Sidebar'
import Home from './Home'
export default function Filldata() {
    const [data,setData]=useState({

        nickname:'',
        bio:'',
        imgCover:'',
        mainImg:'',

    })
    const [login,setlogin]=useState(false)

    const handelChange=(event,property)=>{
        //dynamic setting values
        setData({...data,[property]:event.target.value})
    }
    const submitForm=(event)=>{
        event.preventDefault()
        let localuser=localStorage.getItem("user")
        let userData=JSON.parse(localuser)

        userData.nickname=data.nickname
        userData.bio=data.bio
        userData.imgCover=data.imgCover
        userData.mainImg=data.mainImg



        console.log(userData);
         axios.put(`http://localhost:8080/update/${userData.id}`, userData)
        .then(function (response) {
           localStorage.setItem("user", JSON.stringify(response.data));

           if( response.data){
            window.location='/home'
          }
           console.log(login);
        })
        
    }
  return (
  <> 
  <div className='login-img fill-div'>
           
        <div className="the-gray-box">

            
            <img src= {data.imgCover} className='cover-img'/>

            <div className='contianer-form'>
                
                <img src= {data.mainImg} className='main-img'/>

                <form onSubmit={submitForm} className='user-form'>

                    <input type='text' placeholder='Fill your name' 
                    onChange={(e)=>handelChange(e,'nickname')} 
                    value={data.nickname}
                     />

                    <input type='text' placeholder='Bio'
                     onChange={(e)=>handelChange(e,'bio')} 
                     value={data.bio}
                     /> 

                    <input type='text'placeholder='Upload cover image url'
                     onChange={(e)=>handelChange(e,'imgCover')} 
                     value={data.imgCover}
                     />

                    <input type='text' placeholder='Upload image url'
                     onChange={(e)=>handelChange(e,'mainImg')} 
                     value={data.mainImg}
                     />


                    <button type='submit'>Done</button>
                </form>
            </div>
        </div>
    </div>
        
  
    </>
    
  )
}
