import { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerStyled open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyled>
      <RightNav open={open} />
    </>
  );
}

export default Burger;

const BurgerStyled = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 2em;
  z-index: 2;
  display: none;

  @media (max-width: 766px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) =>
      open ? "var(--white-color)" : "var(--primary-color)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;
