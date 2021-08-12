import Header from "../Header";
import { NotFoundDiv } from "./style";

const NotFoundContent = () => {
  return (
    <>
      <Header></Header>
      <NotFoundDiv>
        <h3>OPS... Esta Página não está disponível</h3>
        <p>
          O link pode não estar funcionando ou a Página pode ter sido removida.
          Verifique se o link que você está tentando abrir está correto.
        </p>
      </NotFoundDiv>
    </>
  );
};
export default NotFoundContent;
