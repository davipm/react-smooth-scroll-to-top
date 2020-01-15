import styled, { css } from "styled-components";

export const BackToTop = styled.div`
  position: fixed;
  right: ${props => props.right || "30px"};
  bottom: ${props => props.bottom || "40px"};
  z-index: 1000;
  cursor: pointer;
  user-select: none;

  ${({ state }) => {
    switch (state) {
      case "entering":
        return css`
          opacity: 0;
          transform: translateY(20px);
          //transform: scale(0.9);
        `;
      case "entered":
        return css`
          opacity: 1;
          transform: translateX(0);
          transition: opacity 300ms, transform 300ms;
        `;
      case "exiting":
        return css`
          opacity: 1;
        `;
      case "exited":
        return css`
          opacity: 0;
          //transform: scale(0.9);
          transform: translateY(20px);
          transition: opacity 300ms, transform 300ms;
          cursor: default;
          pointer-events: none;
        `;
      default:
        break;
    }
  }}
`;

export const Default = styled.div`
  width: 40px;
  height: 35px; // <-- this may change
  padding-top: 7px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  background-color: ${props => props.bgColor || "#98a6d4"};
  border-radius: 0.3rem;
  opacity: 0.6;
  transition: all 0.15s ease-in-out;

  span {
    color: #fff;
  }

  &:hover {
    opacity: 1;
  }
`;

export const ArrowTop = styled.i`
  display: inline-block;
  border: solid white;
  padding: 3px;
  // arrow UP
  border-width: 0 3px 3px 0;
  transform: rotate(-135deg);
`;
