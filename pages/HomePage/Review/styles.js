import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 0 40px 0;
  background-color: var(--light-blue);

  @media (max-width: 803px) {
    padding: 50px 0 10px 0;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  padding: 0 22px;
  width: min(100%, 1244px);
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-family: montserrat;
  font-weight: 700;
  font-size: 4rem;
  color: var(--grey);

  margin: 0 0 42px 0;
`;
