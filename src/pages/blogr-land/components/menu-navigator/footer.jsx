import { menuLinks } from "./menu-links";
import './footer.css';
import { ReactComponent as Logo } from "../../images/logo.svg";


function ListNavigator({ title, list }) {
  return (
    <ul className="section-titles">
      <li>
        <span> {title}</span>
        <ul className="pointer">
          {list.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default function Footer() {

  return (
    <footer>
      <Logo/>
      <br/>
        {menuLinks.map((item) => {
          const [title, list] = Object.entries(item)[0]
          return <ListNavigator key={title} title={title} list={list}/>
        })}
    </footer>

  )
}
