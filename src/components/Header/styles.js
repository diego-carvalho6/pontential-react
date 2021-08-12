import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Box = styled.div`
  width: 100%;
  height: 65px;
  background-image: linear-gradient(rgb(0, 20, 8), rgb(0, 43, 93));
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    color: white;
    margin: 10px;
    border: 2px solid;
    width: 200px;
  }
`;

export const ButtonLink = styled(Button)``;
