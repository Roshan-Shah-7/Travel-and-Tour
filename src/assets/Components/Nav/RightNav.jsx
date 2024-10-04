import styled from "styled-components";

function RightNav({ open }) {
  return (
    <>
      <Nav_Links open={open}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Packages</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
      </Nav_Links>
    </>
  );
}

export default RightNav;

const Nav_Links = styled.div`
  ul {
    display: flex;
    gap: 2rem;
    font-weight: 600;
  }

  @media (max-width: 766px) {
    ul {
      flex-direction: column;
      background-color: var(--primary-color);
      color: var(--white-color);
      position: fixed;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      top: 0;
      right: 0;
      height: 100vh;
      width: 200px;
      align-items: center;
      padding-top: 6rem;
      gap: 3rem;
      transition: transform 0.3s ease-in-out;
    }
  }

  @media (min-width: 1440px) {
    a {
      font-size: 1.2rem;
    }
  }
`;
