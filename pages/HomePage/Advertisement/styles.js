import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 0 40px 0;
  background-color: var(--white);

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
  color: var(--dark-grey);

  margin: 0 0 42px 0;

  grid-area: title;
`;

export const Paragraph = styled.p`
  font-family: montserrat;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: var(--dark-grey);

  margin: 0 0 42px 0;

  grid-area: paragraph;

  @media (max-width: 803px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const Select = styled.div`
  height: 48px;
  width: 285px;
  padding: 0 15px;
  border-radius: var(--border-radius-6);
  border: 1px solid var(--dark-grey);
  background-color: var(--white);
  box-sizing: border-box;

  font-family: montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--dark-grey);

  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-area: select;

  @media (max-width: 803px) {
    display: none;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto 285px;
  column-gap: 112px;
  grid-template-rows: auto auto;
  grid-template-areas:
    "title select"
    "paragraph .";

  @media (max-width: 803px) {
    grid-template-areas:
      "title title"
      "paragraph paragraph";
  }
`;

export const GreenEm = styled.em`
  color: var(--green);
  font-style: normal;
`;

export const BoldEm = styled.em`
  font-weight: 600;
  font-style: normal;
`;

export const ChipContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  row-gap: 50px;

  @media (max-width: 803px) {
    display: none;
  }
`;

export const Center = styled.div`
  padding: 40px 0;
  text-align: center;

  @media (max-width: 803px) {
    padding: 0 0 30px 0;
  }
`;
