import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  button {
    color: black;
    margin: 10px;
    border: 2px solid;

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const BoxContent = styled.div`
  text-align: center;
  max-width: 500px;
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
  border: 2px solid ${(props) => (props.sucess ? "#42f577" : "#f54277")};
  background-color: ${(props) => (props.sucess ? "#42f5a4" : "#f54242")};
`;
export const BoxGeral = styled.div`
  width: 100%;
  max-width: 1200px;
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
`;

export const ButtonPage = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: white;
  h2:hover {
    opacity: 0.8;
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
