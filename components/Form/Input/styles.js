import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;

  position: relative;
`;

export const Label = styled.label`
  font-family: montserrat;
  font-weight: 600;
  font-size: 16px;
  color: var(--dark-grey);

  padding-bottom: 16px;

  @media (max-width: 803px) {
    font-size: 14px;
    padding-bottom: 12px;
  }
`;

export const InputContainer = styled.div`
  > input {
    font-family: montserrat;
    font-weight: 700;
    font-size: 18px;
    color: var(--dark-grey);

    width: 100%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    padding-left: 24px;

    background-color: var(--white);
    border-radius: var(--border-radius-6);
    border: 1px solid var(--light-grey);

    :focus {
      outline: none;
      border: 1px solid var(--dark-grey);
    }

    ::placeholder {
      color: var(--light-grey);
    }

    @media (max-width: 803px) {
      font-size: 16px;
    }
  }

  height: 64px;
  position: relative;

  @media (max-width: 803px) {
    height: 48px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 16px;
  bottom: 16px;

  padding: 0 18px;
  display: flex;
  justify-content: center;

  border-left: 1px solid var(--light-grey);

  @media (max-width: 803px) {
    display: none;
  }
`;

export const AnnexeContainer = styled.div`
  position: absolute;
  bottom: -25px;
  left: 20px;
`;
