import { useEffect, useState } from 'react';
import buttonSideBar from '../../assets/images/Button-SideBar.png';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/styles/components/header/header.css';
import { Form } from './Form';
import { ButtonAdd } from './ButtonAdd';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isFormOpen, setIsFormOpen] = useState<Boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currLocation = location.pathname;

  const dropdownMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const dropdownForm: () => void = () => {
    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth <= 730 ? (
        <header>
          <nav>
            <div className="nav-logo">
              <img
                src="https://www.globant.com/themes/custom/globant_corp_theme/images/2019/globant-logo-dark.svg"
                alt="Logo_Globant"
              />
              <button onClick={dropdownMenu}>
                <img src={buttonSideBar} alt="menu" />
              </button>
            </div>
          </nav>
          {isMenuOpen && (
            <div className="dropdown-menu">
              <ul role="tablist">
                <li role="tab">
                  {currLocation === '/' ? (
                    <Link to="/" style={{ color: '#c1d72f' }}>
                      Overview
                    </Link>
                  ) : (
                    <Link to="/">Overview</Link>
                  )}
                </li>
                <li role="tab">
                  {currLocation === '/contacts' ? (
                    <Link to="/" style={{ color: '#c1d72f' }}>
                      Contacts
                    </Link>
                  ) : (
                    <Link to="/contacts">Contacts</Link>
                  )}
                </li>
                <li role="tab">
                  {currLocation === '/favorites' ? (
                    <Link to="/" style={{ color: '#c1d72f' }}>
                      Favorites
                    </Link>
                  ) : (
                    <Link to="/favorites">Favorites</Link>
                  )}
                </li>
                <li role="tab">
                  <ButtonAdd dropdownForm={dropdownForm} />
                </li>
              </ul>
            </div>
          )}
          <Form isOpen={isFormOpen} />
        </header>
      ) : (
        <header>
          <nav>
            <div className="nav-logo">
              <figure>
                <img
                  src="https://www.globant.com/themes/custom/globant_corp_theme/images/2019/globant-logo-dark.svg"
                  alt="Logo_Globant"
                />
              </figure>
            </div>
            <div className="nav-menu">
              <ul role="tablist">
                <li role="tab">
                  {currLocation === '/' ? (
                    <Link to="/" style={{ color: '#c1d72f' }}>
                      Overview
                    </Link>
                  ) : (
                    <Link to="/">Overview</Link>
                  )}
                </li>
                <li role="tab">
                  {currLocation === '/contacts' ? (
                    <Link to="/" style={{ color: '#c1d72f' }}>
                      Contacts
                    </Link>
                  ) : (
                    <Link to="/contacts">Contacts</Link>
                  )}
                </li>
                <li role="tab">
                  {currLocation === '/favorites' ? (
                    <Link to="/" style={{ color: '#c1d72f' }}>
                      Favorites
                    </Link>
                  ) : (
                    <Link to="/favorites">Favorites</Link>
                  )}
                </li>
                <li role="tab">
                  <ButtonAdd dropdownForm={dropdownForm} />
                </li>
              </ul>
            </div>
          </nav>
          <Form isOpen={isFormOpen} />
        </header>
      )}
    </>
  );
};
