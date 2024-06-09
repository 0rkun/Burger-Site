import { Link } from "react-router-dom";
import "../styles/Home.css";
import Hamburger from "../assets/hamburger.jpg";

function Home() {
  return (
    <div className="mainPage" style={{ backgroundImage: `url(${Hamburger})` }}>
      <div className="order">
        <Link to="/menu">
          <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
