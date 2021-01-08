import styled, { css } from "styled-components";

export const Container = styled.button`
  display: inline-block;
  border-radius: 100px;
  padding: 15px 20px;

  font-family: montserrat;
  font-weight: 600;
  font-size: 16px;

  margin: 0 8px 8px 0;

  ${({ isSelected }) =>
    isSelected
      ? css`
          color: var(--extra-light-grey);
          background-color: var(--blue);
          border: 1px solid transparent;
        `
      : css`
          color: var(--blue);
          background-color: var(--lighter-grey);
          border: 1px solid var(--blue);
        `}

  cursor: pointer;

  :focus {
    outline: none;
  }
`;
