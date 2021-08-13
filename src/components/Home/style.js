import styled, { keyframes } from "styled-components";

import { Button, TextField } from "@material-ui/core";

const rotate = keyframes`

    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
  
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const BoxPage = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  button {
    color: black;
    margin: 10px;
    border: 2px solid;
  }
  div:hover {
    opacity: 0.8;
  }
`;

export const BoxContent = styled.div`
  position: relative;
  text-align: center;
  max-width: 450px;
  min-width: 280px;
  width: 100%;
  overflow-y: auto;
  max-height: 500px;
  min-height: 200px;
  border-radius: 20px;
  margin: 20px;
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  align-items: center;
  border: 2px solid
    ${(props) =>
      props.sucess === "M"
        ? "#17F5E3"
        : props.sucess === "F"
        ? "#ECFA15"
        : "#D61FF4"};
  background-color: ${(props) =>
    props.sucess === "M"
      ? "#17F5E3"
      : props.sucess === "F"
      ? "#ECFA15"
      : "#D61FF4"};

  opacity: 0.9;
  button:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;
export const BoxGeral = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ButtonRow = styled(Button)``;

export const Sup = styled.h2`
  margin: 20px;
  width: 240px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => (props.trial ? "#42f5a4" : "#f54242")};
  svg {
    width: 50px;
    height: 50px;
  }
`;

export const ButtonPage = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  padding: 0.5rem;

  svg {
    background-color: ${(props) =>
      props.sucess === "M"
        ? "#d4fff8"
        : props.sucess === "F"
        ? "#FAF2C2"
        : "#F9C0FA"};

    width: 25px;
    height: 25px;
  }
`;

export const NothingHereBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0.4;
  font-size: 1.5rem;
  font-family: "Times New Roman", Times, serif;
`;

export const ModalLoading = styled.div`
  height: ${window.screen.height}px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
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

export const TrashButton = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  padding: 0.5rem;
  position: absolute;
  right: 0;

  svg {
    background-color: ${(props) =>
      props.sucess === "M"
        ? "#d4fff8"
        : props.sucess === "F"
        ? "#FAF2C2"
        : "#F9C0FA"};

    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`;
export const InputSearch = styled(TextField)``;

export const BoxSearch = styled.div`
  margin: 35px auto 20px auto;
  width: 100%;
  max-width: 220px;
  position: relative;
  svg {
    position: absolute;
    left: 15px;
    top: 15px;
    width: 30px;
    height: 30px;
    opacity: 0.2;
  }
`;
