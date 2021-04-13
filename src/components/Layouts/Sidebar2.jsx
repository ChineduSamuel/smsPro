import React, {useState, useEffect} from "react";
import Menus from '../../constants/nav'
import { useParams, Link,useLocation  } from "react-router-dom";
import * as links from "../../constants/route";
import dashboard from '../../img/dashboard.svg'
import organization from '../../img/organization.svg'
import campaign  from '../../img/campaign.svg'
import contact  from '../../img/contact.svg'
import topup  from '../../img/top-up.svg'
import report  from '../../img/report.svg'
import settings  from '../../img/settings.svg'
import profile  from '../../img/profile.svg'
import notification  from '../../img/notification.svg'
import SideBar2Options from "./SideBar2Options";

export default function FixedLeftNav(props) {

  const campaigny = 'overview'
  const location = useLocation();
  const [menuList , setMenu] = useState({title: '', menus: []})
  const [activeMain , setActiveMain] = useState(false)
  const [activateSubWidth , setActivateSubWidth] = useState(false)
  const [active, setActive] = useState('overview')


  const sideBarOptions = {
    overview: [{name: 'Overview', link: '/overview'}],
    campaign: [{name: "Start new campaign" ,link: "/new_campaign"},{name: "Choose template", link: '/choose_template'},{name: "Campaign history", link: 'campaign_history'}],
    organization: ["Create new","Invite team member", "Organizations"],
    contacts: ["choose campaign","select template", "others"],
   
  }
 





  const getMenus = (id) => {
      setActive(id)
  }

  console.log(sideBarOptions[active])

  const routeName = location.pathname.split('/');

  // routeName = "overview"



  // useEffect(() => {
  //   setActive(routeName)
    
  // }, [routeName]) 

  

  return (
    <nav className="left-nav" >
      <div className="left-nav-menu">
        <ul className="menu-items">
        
              <Link style={{color: '#6e84ff', textDecoration: 'none'}} to="/overview" >
             <li className="items" style={{cursor: 'pointer'}}>
             <div className="items-icon">
               <img src={dashboard}  alt="" className='img-color-white' onClick={getMenus.bind(this, 'overview')} />
             </div>
             <span className="heading-primary-navs">Overview</span>
            </li>
            </Link>
            <Link style={{color: '#6e84ff', textDecoration: 'none'}} to="/new_campaign" >
             <li className="items" style={{cursor: 'pointer'}}>
             <div className="items-icon">
               <img src={campaign}  alt="" className='img-color-white' onClick={getMenus.bind(this, 'campaign')} />
             </div>
             <span className="heading-primary-navs">Campaign</span>
            </li>
            </Link>
            <Link style={{color: '#6e84ff', textDecoration: 'none'}} to="/organizations" >
             <li className="items" style={{cursor: 'pointer'}}>
             <div className="items-icon">
               <img src={organization}  alt="" className='img-color-white' onClick={getMenus.bind(this, 'organization')} />
             </div>
             <span className="heading-primary-navs">Organization</span>
            </li>
            </Link>
            <Link style={{color: '#6e84ff', textDecoration: 'none'}} to="/choose_template" >
             <li className="items" style={{cursor: 'pointer'}}>
             <div className="items-icon">
               <img src={contact}  alt="" className='img-color-white'  />
             </div>
             <span className="heading-primary-navs">Contacts</span>
            </li>
            </Link>
            <Link style={{color: '#6e84ff', textDecoration: 'none'}} >
             <li className="items" style={{cursor: 'pointer'}}>
             <div className="items-icon">
               <img src={topup}  alt="" className='img-color-white' />
             </div>
             <span className="heading-primary-navs">Top Up</span>
            </li>
            </Link>
            <Link style={{color: '#6e84ff', textDecoration: 'none'}} >
             <li className="items" style={{cursor: 'pointer'}}>
             <div className="items-icon">
               <img src={report}  alt="" className='img-color-white' />
             </div>
             <span className="heading-primary-navs">Reports</span>
            </li>
            </Link>
            <Link style={{color: '#6e84ff', textDecoration: 'none'}} >
             <li className="items" style={{cursor: 'pointer'}}>
             <div className="items-icon">
               <img src={settings}  alt="" className='img-color-white' />
             </div>
             <span className="heading-primary-navs">Settings</span>
            </li>
            </Link>
            <Link style={{color: '#6e84ff', textDecoration: 'none'}} >
             <li className="items" style={{cursor: 'pointer'}}>
             <div className="items-icon">
               <img src={profile}  alt="" className='img-color-white' />
             </div>
             <span className="heading-primary-navs">Profile</span>
            </li>
            </Link>
            <Link style={{color: '#6e84ff', textDecoration: 'none'}} >
             <li className="items" style={{cursor: 'pointer'}}>
             <div className="items-icon">
               <img src={notification}  alt="" className='img-color-white' />
             </div>
             <span className="heading-primary-navs">Notifications</span>
            </li>
            </Link>
          
            
       
        </ul>
      </div>

      <div className="side-nav-sub">
        <h2 className="side-bar-sub-main">{menuList.title}</h2>
        {/* <SideBar2Options active={active} /> */}
        <div className="subitems-area space-up">
        {sideBarOptions[active].map((each) => {
            return <Link to={each.link} className="mt-2 py-2 sidebar-active" style={{display: 'block', color: '#000', textDecoration: 'none'}} >{each.name}</Link>
        })}
         
        </div>
      </div>
    </nav>
  );
}
