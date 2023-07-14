import { Link } from 'react-router-dom';
import '../styles/navBar.css';

function NavBar() {
  return (
    <div className="nav-wrapper">
      <div className="logo">Math Magicians</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/calculator">Calculator</Link>
        <span>|</span>
        <Link to="/quotes">Quote</Link>
      </nav>
    </div>
  );
}

export default NavBar;
