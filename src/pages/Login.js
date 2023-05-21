
const Login =()=>{
    return(<div className="login-img">
    <div className="center">
        <h1>Login</h1>

        {/* {JSON.stringify(data)} */}

        <form className="login-form" 
        style={{display: "flex" 
        ,flexDirection: "column",
        alignContent: "center",
         flexWrap: "wrap"}}>
            <div className="txt_field">
                <input type="text"  
                placeholder="Enter name"
                id="name" 
                 />
                <span></span>
                <label>Username</label>
            </div>
           
            <div className="txt_field">
                <input type="password" 
                placeholder="Enter password" 
                id="password" 
                 />
                <span></span>
                <label>Password</label>
            </div>
   

    <button type="submit">Register</button>
    {/* <input type="submit" value="Login" /> */}
    <div className="signup_link">
      Dont have an account ? <a href="/signup" >Signup</a>
    </div>

            
        </form>
    </div></div>
    );
}

export default Login

