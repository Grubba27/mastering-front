import '../../blogr.css'
import '../menu-navigator/navigator.css'
import React, { useState } from 'react'
import { menuLinks } from "./menu-links";

function ExtensibleMenuItem({ title, list }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul className={`navbar-title-items  ${isOpen ? 'arrow-up' : 'arrow-down'}`}>
      <li onClick={() => setIsOpen(!isOpen)}>
        <span className="pointer"> {title}</span>
        <ul className={`menu-items ${isOpen ? '' : 'd-none'}`}>
          {list.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default function MenuNavigator() {

  return (
    <nav className="navbar ">
      {menuLinks.map((item) => {
        const [title, list] = Object.entries(item)[0]
        return <ExtensibleMenuItem key={title} title={title} list={list}/>
      })}

      <hr/>

      <a>Login</a>
      <button>Sign Up</button>
    </nav>

  )
}
