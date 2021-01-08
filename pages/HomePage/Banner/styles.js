import styled from "styled-components";

export const Container = styled.section`
  min-height: 85vh;
  padding: 120px 0;
  box-sizing: border-box;

  background-size: cover;
  background-image: url("/images/banner_bg.jpg");
  background-repeat: no-repeat;

  @media (max-width: 803px) {
    padding: 44px 0;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  padding: 0 22px;
  width: min(100%, 1244px);
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-family: montserrat;
  font-size: 5.4rem;
  font-weight: 700;
  color: var(--dark-grey);

  margin: 0 0 35px 0;
`;

export const Paragraphe = styled.p`
  font-family: montserrat;
  font-size: 2rem;
  font-weight: 500;
  color: var(--dark-grey);

  margin: 0 0 44px 0;
`;

export const Strong = styled.strong`
  color: ${({ color }) => (color === "green" ? "var(--green)" : "var(--blue)")};
`;

export const StyledLink = styled.a`
  font-family: montserrat;
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration: underline;
  color: var(--green);

  cursor: pointer;
`;
