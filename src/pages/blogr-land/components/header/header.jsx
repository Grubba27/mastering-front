import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Hamburger } from "../../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../../images/icon-close.svg";
import MenuNavigator from "../menu-navigator/menu-navigator";
import './header.css';
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header-wrapper">
      <div className="header-controllers">
        <Logo/>
        <div className="pointer" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <Close/> : <Hamburger/>}</div>
      </div>
      {isOpen ? <MenuNavigator /> : null}
      <section>
        <h2>
          A modern publishing platform
        </h2>
        <h4 className="overpass">
          Grow your audience and build your online brand
        </h4>
        <div className="cta-controller">
          <button className="outline-button">
            Start for Free
          </button>
          <button className="inline-button">
            Learn More
          </button>
        </div>
      </section>
    </header>
  )
}
