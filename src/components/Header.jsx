import { Link, useLocation } from 'react-router-dom';


function Header() {
  const currentPage = useLocation().pathname;

  return (
    <>
    <ul className="nav nav-tabs">
    <h2 className='header'>Gillian Flatt</h2>
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
           className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Positions"
           className={currentPage === '/Positions' ? 'nav-link active' : 'nav-link'}
        >
          Positions
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Headshots"
          className={currentPage === '/Headshots' ? 'nav-link active' : 'nav-link'}
        >
          Headshots
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
    </>
  );
}

export default Header;
