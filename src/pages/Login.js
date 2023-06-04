import { useState } from "react";
import axios from 'axios'

const Login =()=>{

    const [data,setData]=useState({
        name:'',
        password:'',  
    })

    const submitForm=(event)=>{
        event.preventDefault()
        let userData={
            name:data.name,
            email:data.email,
            password:data.password
        }
        axios.get(`http://localhost:8080/user/${data.name}`, userData)
        .then(function (response) {
            //localStorage.setItem("user", JSON.stringify(response.data));
            if(response.data.password== data.password){
                localStorage.setItem("user", JSON.stringify(response.data))
                window.location= "/home"
            }

    
        })
    }



    const handelChange=(event,property)=>{
        //dynamic setting values
        setData({...data,[property]:event.target.value})
    }



    return(<div className="login-img">
    <div className="center">
        <h1>Login</h1>

        {/* {JSON.stringify(data)} */}

        <form className="login-form"  onSubmit={submitForm}
        style={{display: "flex" 
        ,flexDirection: "column",
        alignContent: "center",
         flexWrap: "wrap"}}>
            <div className="txt_field">
                <input type="text"  
                placeholder="Enter name"
                id="name" 
                onChange={(e)=>handelChange(e,'name')} 
                value={data.name} 
                 />
                
                <label>Username</label>
            </div>
           
            <div className="txt_field">
                <input type="password" 
                placeholder="Enter password" 
                id="password" 
                onChange={(e)=>handelChange(e,'password')} 
                value={data.password} 
                 />
                
                <label>Password</label>
            </div>
   

    <button type="submit">Login</button>
   
    <div className="signup_link">
      Dont have an account ? <a href="/" >Signup</a>
    </div>

            
        </form>
    </div></div>
    );
}

export default Login

