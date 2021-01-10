import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext} from './context'

const Sidebar = () => {
  const {isSideBarOpen,closeSideBar} = useGlobalContext();

  return <aside className={`${isSideBarOpen?'sidebar show-sidebar':'sidebar'}`}>
    <div className="sidebar-header">
      <img src={logo} alt="logo"/>
      <button className="close-btn" onClick={closeSideBar}>
        <FaTimes />
      </button>
    </div>
    <ul className="links">
      {links.map((item)=>{
        return <li key={item.id}>
          <a href={item.url}>
            {item.icon}
            {item.text}
          </a>
        </li>
      })}
    </ul>
    <ul className="social-icons">
      {social.map((item)=>{
        return (
          <li key={item.id}>
            <a href={item.url}>{item.icon}</a>
          </li>
        )
      })}
    </ul>
  </aside>
}

export default Sidebar
