
import Logo from "../assets/navbar.jpg";
import { Link } from "react-router-dom";

function Navbar(){
 return (
     <div className="navbar">
        <div className="left-side">
            <img src={Logo} alt="foto"/>
        </div>
        <div className="right-side">
            <Link to="/">Home</Link>
            <Link to="/menu">Menü</Link>
          
            <Link to="/contact">Contact</Link>

        </div>
     </div>
 )
}
export default Navbar