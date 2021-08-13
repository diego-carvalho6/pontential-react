import styled, { keyframes } from "styled-components";
const rotate = keyframes`

    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
  
`;

export const BoxForm = styled.form`
  max-width: 500px;
  width: 85%;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  padding: 70px 0 70px 0;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  border-radius: 25px;
  @media screen and (max-width: 400px) {
    margin: 75px auto;
  }
`;

export const BoxInput = styled.div`
  margin: 10px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  label {
    text-align: left;
    justify-self: left;
    padding: 10px;
    align-self: left;
  }
  div {
    width: 95%;
    margin: 0 auto;
  }
`;

export const BoxInputR = styled.div`
  margin: 10px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 95%;
    margin: 0 auto;
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 30px auto;
    width: 50%;
  }
`;
export const InputEnvio = styled.input`
  background-color: transparent;
  width: 50%;
  max-width: 100px;
  margin: 0 auto;
  cursor: pointer;
  outline: 0;
  border: 0;
  cursor: pointer;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  text-transform: uppercase;
`;

export const Modal = styled.div`
  height: ${window.innerHeight}px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;

    svg {
      animation-name: ${rotate};
      animation-iteration-count: infinite;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-direction: normal;
      transform: rotateZ(360deg);
      width: 100px;
      height: 100px;
      color: blue;
    }
  }
`;

export const DateInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 400px) {
    width: 50%;
    min-width: 200px;
    margin: 0 auto;
  }
`;
export const BoxSubmit = styled.div`
  display: flex;
  justify-content: center;
`;
