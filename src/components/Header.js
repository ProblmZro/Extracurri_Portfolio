import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo>ProblmZro</Logo>
      </Link>
      <NavBar>
        <Link to="/">
          <div>Introduce</div>
        </Link>
        <Link to="/interest">
          <div>Interest</div>
        </Link>
        <Link to="projects">
          <div>Projects</div>
        </Link>
        <Link to="/contact">
          <div>Contact</div>
        </Link>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  font-family: "BM Dohyeon";
  padding: 44px 81px 0px 81px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: #dfdfdf;
  font-size: 24px;
`;

const NavBar = styled.div`
  display: flex;
  gap: 67px;
  font-size: 20px;
  color: #adadad;
`;
