
import { useNavigate } from "react-router-dom";

export function Header() {

  const navigate = useNavigate();

  return (
    <>
      <h1>PicPocket</h1>
      <button onClick={() => navigate('/')}>Go Home</button>
    </>
  )
}
