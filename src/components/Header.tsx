
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.svg'

export function Header() {

  return (
    <header>
      <Link to='/'>
        <img className="logo" src={logo} alt="PikPocket" />
      </Link>
    </header>
  )
}
