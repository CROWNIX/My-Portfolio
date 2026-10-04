import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMotion } from "../Motion";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const { activeSection, scrolled } = useMotion();
  const menuButton = React.useRef(null);
  React.useEffect(() => {
    const close = event => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    const resize = () => { if (window.innerWidth > 768) setIsOpen(false); };
    document.addEventListener('keydown', close);
    window.addEventListener('resize', resize);
    return () => {
      document.removeEventListener('keydown', close);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <Nav as="nav" aria-label="Main navigation" $scrolled={scrolled}>
      <NavbarContainer>
        <NavLogo to="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Rahmat Fauzi</Span>
          </div>
        </NavLogo>
        <MobileIcon ref={menuButton} type="button" aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavItems>
          <NavLink href="#about" aria-current={activeSection === 'about' ? 'location' : undefined}>Tentang</NavLink>
          <NavLink href="#skills" aria-current={activeSection === 'skills' ? 'location' : undefined}>Skills</NavLink>
          <NavLink href="#experience" aria-current={activeSection === 'experience' ? 'location' : undefined}>Pengalaman</NavLink>
          <NavLink href="#projects" aria-current={activeSection === 'projects' ? 'location' : undefined}>Projects</NavLink>
          {/* <NavLink href="#education">Edukasi</NavLink> */}
        </NavItems>
        <ButtonContainer>
          <GitHubButton className="shimmer-button" href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
          <MobileMenu id="mobile-navigation" $isOpen={isOpen} aria-hidden={!isOpen} inert={isOpen ? undefined : ""}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Tentang
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Pengalaman
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            {/* <MobileLink
                            href="#education"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            Edukasi
                        </MobileLink> */}
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Profile Github
            </GitHubButton>
          </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
