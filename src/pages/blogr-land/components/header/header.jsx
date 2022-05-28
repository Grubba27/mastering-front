import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Hamburger } from "../../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../../images/icon-close.svg";
import MenuNavigator from "../menu-navigator/menu-navigator";
import './header.css';
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="header-controllers">
        <Logo/>
        <div className="pointer" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <Close/> : <Hamburger/>}</div>
      </div>
      {isOpen ? <MenuNavigator /> : null}
    </header>
  )
}
