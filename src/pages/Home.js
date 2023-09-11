import { Link } from "react-router-dom";
import BannerImages from "../assets/2.jpg"
function Home(){

    return (
        <div className="home" style={{backgroundImage:`url(${BannerImages})`}}>
            <div className="header-container">
                <h1>Yemek Listesi</h1>
                
                <Link to="/menu"><button>Menü!!</button></Link>
                
            </div>
        </div>
    )
}

export default Home;