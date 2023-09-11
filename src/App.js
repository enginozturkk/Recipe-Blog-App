import Navbar from "./components/navbar";
import "./App.css";
import {BrowserRouter as Router,Route , Routes} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App(){


    return (
        <div>
            <Router>
              <Navbar/>
              <Routes>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/menu" element={<Menu/>}/>
                 <Route path="/contact" element={<Contact/>}/>
                 
              </Routes>
              
            </Router>
            
            
        </div>
    )
}

export default App;