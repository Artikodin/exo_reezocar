import styled from "styled-components";

export const Container = styled.div`
  height: 253px;
  width: 213px;
  border-radius: var(--border-radius-6);
  margin-right: 16px;

  box-shadow: 0px 20px 40px rgba(5, 102, 141, 0.1);
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 131px;
  object-fit: cover;
`;

export const Details = styled.div`
  padding: 9px 17px;
  display: grid;
  grid-template-rows: 40px auto auto auto;
`;

export const Title = styled.h3`
  font-family: montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;

  margin: 0;
`;

export const Descritpion = styled.p`
  font-family: montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  margin: 0;
`;

export const City = styled.p`
  font-family: montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  margin: 0;
`;

export const Price = styled.p`
  font-family: montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;

  margin: 0;
`;
