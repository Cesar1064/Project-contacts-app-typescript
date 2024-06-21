import { useEffect, useState } from 'react';
import newIcon from '../../assets/images/+NEW.png';
import buttonSideBar from '../../assets/images/Button-SideBar.png';
import '../../assets/styles/header/header.css';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownMenu = () => {
    setIsOpen(!isOpen);
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
      {windowWidth <= 679 ? (
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
          {isOpen && (
            <div className="dropdown-menu">
              <ul role="tablist">
                <li role="tab">
                  <a href="#">Overview</a>
                </li>
                <li role="tab">
                  <a href="#">Contacts</a>
                </li>
                <li role="tab">
                  <a href="#">Favorites</a>
                </li>
                <li role="tab">
                  <button>
                    <img src={newIcon} alt="" />
                  </button>
                </li>
              </ul>
            </div>
          )}
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
                  <a href="#">Overview</a>
                </li>
                <li role="tab">
                  <a href="#">Contacts</a>
                </li>
                <li role="tab">
                  <a href="#">Favorites</a>
                </li>
                <li role="tab">
                  <button>
                    <img src={newIcon} alt="" />
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};
