import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContent } from './Context';

const Navbar = () => {
  const { openSidebar } = useGlobalContent();
  return (
      <nav className='nav'>
          <div className="nav-center">
              <div className="nav-header">
                  <img src={logo} alt="logo" />
                  <button className='btn toggle-btn' onClick={openSidebar}>
                    <FaBars />
                  </button>
              </div>
              <ul className="nav-links">
                  <li>
                      <button className="link-btn">Products</button>
                  </li>
                  <li>
                      <button className="link-btn">Developers</button>
                  </li>
                  <li>
                      <button className="link-btn">Company</button>
                  </li>
              </ul>
              <button className='signin-btn btn'>Sign In</button>
          </div>
      </nav>
  )
};

export default Navbar;