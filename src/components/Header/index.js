import { Box, ButtonLink } from "./styles";
import { useHistory } from "react-router";
import { FiHome, FiCheckSquare } from "react-icons/fi";

const Header = () => {
  let history = useHistory();

  return (
    <Box>
      <ButtonLink onClick={() => history.push("/register")}>
        <FiCheckSquare /> Cadastro
      </ButtonLink>
      <ButtonLink onClick={() => history.push("/")}>
        <FiHome /> Home
      </ButtonLink>
    </Box>
  );
};

export default Header;
