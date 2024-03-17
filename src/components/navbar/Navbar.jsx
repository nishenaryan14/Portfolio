import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        ARYAN'S PORTFOLIO
      </div>
      <ul className="menu">
        <li className="menuItem">Explore my</li>
        <li className="menuItem">About me</li>
        <button className="menuItem">Contact</button>
      </ul>
    </div>
  );
}
