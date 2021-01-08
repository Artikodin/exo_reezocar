import styled, { css } from "styled-components";

const buttonSize = size => {
  const sizeToCss = {
    default: css`
      padding: 0 24px;
      height: 48px;
      font-size: 16px;
    `,
    big: css`
      padding: 0 48px;
      height: 64px;
      font-size: 18px;
      @media (max-width: 803px) {
        height: 48px;
      }
    `,
    large: css`
      padding: 0 80px;
      height: 64px;
      font-size: 18px;
      @media (max-width: 803px) {
        width: 100%;
        padding: 0 48px;
        font-size: 14px;
        height: 48px;
      }
    `
  };
  return sizeToCss[size] || sizeToCss.default;
};

const buttonColor = color => {
  const colorToCss = {
    green: css`
      background-color: var(--green);
    `,
    grey: css`
      background-color: var(--dark-grey);
    `,
    blue: css`
      background-color: var(--blue);
    `
  };
  return colorToCss[color] || colorToCss.green;
};

export const Button = styled.button`
  font-family: montserrat;
  font-weight: 800;
  color: var(--white);

  padding: 16px 24px;
  ${({ color }) => buttonColor(color)};
  border-radius: var(--border-radius-6);
  border: none;

  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  :focus {
    outline: none;
  }
  ${({ size }) => buttonSize(size)};
`;
