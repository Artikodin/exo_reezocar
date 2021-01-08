import styled, { css } from "styled-components";

const formDirection = direction => {
  const directionToCss = {
    row: css`
      flex-direction: row;
      align-items: flex-end;
      > .form-input {
        margin-right: 10px;
      }
    `,
    column: css`
      flex-direction: column;
      align-items: stretch;
      > .form-input {
        margin-bottom: 20px;
        :last-of-type {
          margin-bottom: 40px;
        }
      }
    `
  };
  return directionToCss[direction] || directionToCss.row;
};

export const StyledForm = styled.form`
  display: flex;

  width: min(100%, 1050px);

  ${({ direction }) => formDirection(direction)}
`;
