import styled from "styled-components";

export const BoxAbsolute = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 60%;
  max-width: 280px;
  h4 {
    font-size: 25px;
  }
  button {
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    color: red;
    background-color: rgba(0, 0, 0, 0.9);
    outline: 0;
    border: 0;
  }
  button:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;
