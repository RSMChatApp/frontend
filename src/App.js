
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './pages/style.css';
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Filldata from "./pages/Filldata";
import Home from "./pages/Home";
//import GreetingComponent from "./components/GreetingComponent";



function App() {
  return (
    <>
      <BrowserRouter>
        <div className="dashboard-content">
          
          <Routes>
            <Route exact path="/home" element={<Home />} />
            {/* <Route path="/chat" element={<Chat />} /> */}
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/entry" element={<Filldata />} />
           {/* // <Route path="/greet" element={<GreetingComponent/>}/> */}

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
