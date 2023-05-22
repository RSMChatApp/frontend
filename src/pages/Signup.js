import { useEffect, useState } from "react";
import './login.css'
import axios from "axios";
const SignUp =()=>{


    //reseting the form
    const [data,setData]=useState({

        name:'',
        email:'',
        password:'',  
    })

    

    //submit the form
    const submitForm=(event)=>{
        event.preventDefault()
        let userData={
            name:data.name,
            email:data.email,
            password:data.password
        }
        
        axios.post('http://localhost:8080/addUser', userData)
        .then(function (response) {
            localStorage.setItem("user", JSON.stringify(response.data));

           if( response.data){
            window.location = "/entry"
           }
        })
    }
   
   
     

   // useEffect(()=>{
     //   console.log(data);
    //},[data])
    //handelChange
    const handelChange=(event,property)=>{
        //dynamic setting values
        setData({...data,[property]:event.target.value})
    }
    
    const [error,setError]=useState({
        errors:{},
        isError:false,
    })
    return(
        <div className="login-img">
        <div className="center">
            <h1>SignUp</h1>

            {/* {JSON.stringify(data)} */}

            <form className="login-form" onSubmit={submitForm}
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
                    <input type="text" 
                      placeholder="Enter email" 
                      id="email" 
                      onChange={(e)=>handelChange(e,'email')} 
                      value={data.email} />
                    
                    <label>Email</label>
                </div>
                <div className="txt_field">
                    <input type="password" 
                    placeholder="Enter password" 
                    id="password" 
                    onChange={(e)=>handelChange(e,'password')} 
                    value={data.password} />
                    
                    <label>Password</label>
                </div>
       

        <button type="submit">Register</button>
       
        <div className="signup_link">
          Already have account ? <a href="/login" >Login</a>
        </div>

                
            </form>
        </div></div>
    );
}

export default SignUp

