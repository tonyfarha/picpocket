
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.svg'

export function Header() {

  const navigate = useNavigate();

  return (
    <header>
      <img className="logo" src={logo} alt="PikPocket" />
      <div>
        <button onClick={() => navigate('/')}>Go Home</button>
        <button onClick={() => navigate('/likes')}>Likes</button>
      </div>
    </header>
  )
}
