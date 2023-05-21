
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import './pages/style.css';
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Filldata from "./pages/Filldata";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="dashboard-content">
          
          <Routes>
            <Route exact path="/home" element={<><Sidebar /><Dashboard /></>} />
            <Route path="/chat" element={<><Sidebar /><Chat /></>} />
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/entry" element={<Filldata />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
