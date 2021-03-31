import React, {useState} from "react";
import Menus from '../../constants/nav'
import { useParams, Link,useLocation  } from "react-router-dom";
import * as links from "../../constants/route";

export default function FixedLeftNav(props) {
  const location = useLocation();
  const [menuList , setMenu] = useState({title: '', menus: []})
  const [activeMain , setActiveMain] = useState(false)
  const [activateSubWidth , setActivateSubWidth] = useState(false)



  const getMenus = (id) => {
    const obj = Menus.find(x => x.id === id)
    setActiveMain(obj.name)
    setMenu({
      ...menuList,title: obj.name, menus: obj.menus
    });
    if(obj.menus.length !== 0){
      setActivateSubWidth(true)
    }

  }

  const routeName = location.pathname.split('/');
  console.log(routeName[1])

  

  return (
    <nav className="left-nav" >
      <div className="left-nav-menu">
        <ul className="menu-items">
          {Menus.map((i) =>{
            return (
              <Link style={{color: '#6e84ff', textDecoration: 'none'}} to={`/${i.link}`}>
             <li className="items" style={{cursor: 'pointer'}} onClick={getMenus.bind(this, i.id)}>
             <div className="items-icon">
               <img src={i.icon}  alt="" className={activeMain === i.name  && 'img-color-white'}  />
             </div>
             <span className="heading-primary-navs" className={activeMain === i.name  && 'nav-col-name-hidden'}>{i.name}</span>
            </li>
            </Link>
            )
          })}
            
       
        </ul>
      </div>

      <div className="side-nav-sub">
        <h2 className="side-bar-sub-main">{menuList.title}</h2>
        <div className="subitems-area space-up">
          {menuList.menus.map((menu) => {
            return(
                  <Link to={`/${menu.link}`} style={{textDecoration: 'none', color: '#000'}}><div className={`mt-2 py-2 ${routeName[1] === menu.link && "sidebar-active"}` }>{menu.name}</div></Link>

            )
          })}
         
        </div>
      </div>
      {/* style={{width: !activateSubWidth ? '248px': '107px', backgroundColor: !activateSubWidth ? 'white' : '#fff'}} */}
    </nav>
  );
}
