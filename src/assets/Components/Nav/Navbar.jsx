import styled from "styled-components";
import logo from "/logo.webp";
import { FaSearchLocation } from "react-icons/fa";
import Burger from "./Burger";

function Navbar() {
  return (
    <main>
      <Nav>
        <Logo>
          <img src={logo} alt="Astrapi Travel and Tours" />
        </Logo>
        <Burger />
        <Nav_search>
          <input type="text" placeholder="Search Locations" />
          <div className="search_icon">
            <FaSearchLocation />
          </div>
        </Nav_search>
      </Nav>
    </main>
  );
}

export default Navbar;

const Nav = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1920px;
  width: 100%;
  backdrop-filter: blur(8px);
  z-index: 10;
`;

const Logo = styled.div`
  img {
    width: 5rem;
  }
`;

const Nav_search = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.4rem;
  input {
    border: none;
    background: none;
    outline: none;
  }
  .search_icon {
    cursor: pointer;
  }

  @media (max-width: 766px) {
    display: none;
  }
`;
