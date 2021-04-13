import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
const sideBarOptions = {
    overview: ['overview'],
    campaign: ["Start new campaign","Choose template", "Campaign history"],
    organizations: ["Create new","Invite team member", "Organizations"],
    contacts: ["choose campaign","select template", "others"],
   
  }

export default function SideBar2Options({active}) {
    const ref1 = useRef();

    
    
    useEffect(() => {
        ref1.current.firstElementChild.focus()
        console.log(ref1.current.firstChild)
        
    }, [active])
    return (
        <div ref={ref1} className="subitems-area space-up">
        {sideBarOptions[active].map((each) => {
            return <Link className="mt-2 py-2 sidebar-active" style={{display: 'block', color: '#000', textDecoration: 'none'}} >{each}</Link>
        })}
         
        </div>
    )
}
