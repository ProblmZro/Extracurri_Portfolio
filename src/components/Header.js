import React from "react";
import styled from "styled-components";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Function to determine the color based on the current location
  const getNavbarColor = (path) => {
    return location.pathname === path ? "#dfdfdf" : "#adadad";
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <HeaderWrapper>
      <Link to="/introduce" onClick={scrollToTop}>
        <Logo>ProblmZro</Logo>
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
  padding: 44px 81px 0px 81px;
  display: flex;
  justify-content: space-between;
  z-index: 300;
`;

const Logo = styled.div`
  color: #dfdfdf;
  font-size: 24px;
`;

const NavBar = styled.div`
  display: flex;
  gap: 67px;
  font-size: 20px;
`;
