import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: ${({ wrapperHeight }) => wrapperHeight + "px"};
  padding-bottom: 40px;
`;

export const Container = styled.div`
  scroll-behavior: smooth;
  overflow: auto;
  position: absolute;
  top: 0;
  bottom: -15px;
  left: 0;
  right: 0;
`;

export const Slider = styled.div`
  position: absolute;
  display: flex;
  left: ${({ padding }) => padding + "px"};
`;

export const SlideButton = styled.button`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  border: none;

  background-color: var(--white);
  box-shadow: 0px 20px 40px rgba(5, 102, 141, 0.1);

  position: absolute;
  transform: translateY(-50%);
  ${({ wrapperHeight, padding }) => css`
    top: ${wrapperHeight / 2}px;
    right: ${padding}px;
  `}

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :focus {
    outline: none;
  }
`;
