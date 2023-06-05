import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'visible';
      }
    };
    
    handleScroll();

    return () => {
      document.documentElement.style.overflow = 'visible';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        {isMenuOpen && (
          <div className="close-btn" onClick={closeMenu}>
            <span>&times;</span>
          </div>
        )}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .navbar-collapse {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 80%;
          background-color: #fff;
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          z-index: 1000;
        }

        .navbar-collapse.show {
          transform: translateX(20%);
        }

        .navbar-nav {
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          height: 100%;
          overflow-y: auto;
        }

        .nav-item {
          margin: 1rem;
        }

        .close-btn {
          position: fixed;
          top: 1rem;
          right: 1rem;
          font-size: 1.5rem;
          background: none;
          border: none;
          color: #000;
          cursor: pointer;
          z-index: 1001;
        }

        .close-btn span {
          display: inline-block;
          width: 1.2rem;
          height: 1.2rem;
          background-color: #000;
          border-radius: 50%;
          position: relative;
        }

        .close-btn span:before,
        .close-btn span:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          background-color: #fff;
        }

        .close-btn span:before {
          width: 0.15rem;
          height: 0.75rem;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .close-btn span:after {
          width: 0.75rem;
          height: 0.15rem;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        @media (min-width: 992px) {
          .navbar-collapse {
            display: block !important;
            transform: translateX(0);
            height: auto !important;
            width: auto !important;
            position: static !important;
            transition: none !important;
            background-color: transparent;
            z-index: inherit;
          }

          .navbar-nav {
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            overflow-y: visible;
            height: auto;
          }

          .nav-item {
            margin: 0 1rem;
          }

          .close-btn {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
