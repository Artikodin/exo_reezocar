import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--white);
`;

export const Nav = styled.nav`
  height: 72px;
  margin: auto;
  padding: 0 22px;
  width: min(100%, 1244px);
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled.a`
  font-family: montserrat;
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--dark-grey);

  cursor: pointer;

  margin: 0 20px;

  :first-of-type {
    margin-left: 40px;
  }

  :last-of-type {
    margin-right: 40px;
  }
`;

export const BurgerButton = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;

  :focus {
    outline: none;
  }
`;
