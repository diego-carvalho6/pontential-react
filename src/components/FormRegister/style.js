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
  width: 100%;
  margin: 200px auto;
  display: flex;
  flex-direction: column;
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
`;
export const InputEnvio = styled.input`
  background-color: white;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
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
