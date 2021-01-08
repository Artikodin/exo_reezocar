import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 32px;
  width: 380px;
  height: 220px;
  box-sizing: border-box;
  background-color: var(--white);
  border-radius: var(--border-radius-6);
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.1));

  margin-right: 20px;

  :last-of-type {
    margin-right: 22px;
  }

  @media (max-width: 803px) {
    padding: 18px 20px;
    width: 213px;
    height: 166px;
  }
`;

export const Paragraphe = styled.p`
  font-family: montserrat;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: var(--grey);
  padding-bottom: 15px;

  margin: 0;

  @media (max-width: 803px) {
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 10px;
  }
`;

export const ProfilUser = styled.div`
  display: grid;
  grid-template-columns: 36px auto;
  column-gap: 14px;
  grid-template-rows: 25px 25px;
  justify-items: start;
  align-items: center;
  grid-template-areas:
    "image name"
    "image job";

  @media (max-width: 803px) {
    grid-template-rows: 18px 18px;
  }
`;

export const Image = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  grid-area: image;
`;

export const Name = styled.p`
  font-family: montserrat;
  font-weight: 700;
  font-size: 14px;
  color: var(--black);
  grid-area: name;

  margin: 0;

  @media (max-width: 803px) {
    font-size: 12px;
  }
`;

export const Job = styled.p`
  font-family: montserrat;
  font-weight: 400;
  font-size: 14px;
  color: var(--dark-grey);
  grid-area: job;

  margin: 0;

  @media (max-width: 803px) {
    font-size: 12px;
  }
`;
