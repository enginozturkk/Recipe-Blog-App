import { MenuList } from "../helper/MenuList";

function Menu(){



    return(
        <div className="menu">
            <h1 className="menu-title">
                Menümüz
            </h1>
            <div className="menu-list">
               {MenuList.map((menuItem,key)=>{
                return <div className="menu-item">
                        <div>  <img src={menuItem.image} alt="foto"/>  </div>
                        <h3> {menuItem.name}</h3>
                      
                        <p>Hazırlanışı:{menuItem.hazirlanisi}</p>
                </div>
               })}
            </div>
        </div>
    )

}
export default Menu;