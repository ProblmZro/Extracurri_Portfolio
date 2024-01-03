import React from "react";
import styled from "styled-components";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getNavbarColor = (path) => {
    return location.pathname === path ? "#dfdfdf" : "#adadad";
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <HeaderWrapper>
      <Link to="/introduce" onClick={scrollToTop}>
        <Logo src="images/logo.svg" alt="profile" />
      </Link>
      <NavBar>
        <Link
          to="/introduce"
          style={{ color: getNavbarColor("/introduce") }}
          onClick={scrollToTop}
        >
          Introduce
        </Link>
        <ScrollLink
          to="interest"
          smooth={true}
          duration={500}
          style={{ color: getNavbarColor("/interest") }}
          onClick={() => navigate("/interest")}
        >
          Interest
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          style={{ color: getNavbarColor("/projects") }}
          onClick={() => navigate("/projects")}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          style={{ color: getNavbarColor("/contact") }}
          onClick={() => navigate("/contact")}
        >
          Contact
        </ScrollLink>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  top: 0;
  position: sticky;
  font-family: "BM Dohyeon";
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 44px 81px 0px 81px;

  z-index: 300;

  @media (max-width: 769px) {
    padding: 24px 81px 20px 81px;
    justify-content: center;
    position: static;
  }
`;

const Logo = styled.img`
  height: 25px;
  margin-top: 8px;
`;

const NavBar = styled.div`
  display: none; /* Initially hide on smaller screens */

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    gap: 67px;
    font-size: 20px;
  }
`;
