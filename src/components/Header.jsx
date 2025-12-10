import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.$scrolled ? 'rgba(26, 42, 58, 0.95)' : 'rgba(26, 42, 58, 0.7)'};
  backdrop-filter: blur(10px);
  padding: 1.5rem 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: -0.5px;
  text-decoration: none;

  span {
    color: var(--secondary-aqua);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const NavLink = styled.li`
  a {
    color: var(--white);
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    padding-bottom: 5px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--secondary-aqua);
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover {
      color: var(--secondary-aqua);
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    if (!isHomePage) {
      // Navigate to home page with hash
      navigate(`/#${sectionId}`);
      // Scroll will be handled by the useEffect below
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  // Handle scrolling when navigating from another page with a hash
  useEffect(() => {
    if (isHomePage && location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location, isHomePage]);

  return (
    <HeaderContainer $scrolled={scrolled}>
      <Nav>
        <Logo to="/">
          Eric <span>Wu</span>
        </Logo>
        <NavLinks>
          <NavLink>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
              About
            </a>
          </NavLink>
          <NavLink>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
              Skills
            </a>
          </NavLink>
          <NavLink>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
              Projects
            </a>
          </NavLink>
          <NavLink>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              Contact
            </a>
          </NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
