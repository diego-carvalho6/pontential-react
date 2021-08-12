import axios from "axios";
import Header from "../Header";
import { useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { VscLoading } from "react-icons/vsc";
import {
  BoxContent,
  Box,
  BoxGeral,
  ButtonRow,
  Sup,
  ButtonPage,
  NothingHereBox,
  BoxPage,
  Modal,
} from "./style";
import { set } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { Slide, Fade } from "react-awesome-reveal";
const Home = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [developerArray, setDeveloperArray] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [url, setUrl] = useState("http://127.0.0.1:8000/developers?limit=9");
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setPrev(res.data.previous);
        setNext(res.data.next);
        res.data.results.lenght === 0
          ? setDeveloperArray(false)
          : setDeveloperArray(res.data.results);
      })
      .catch((e) => setLoading(!loading));
  }, [url, update]);

  return (
    <Slide direction="right" triggerOnce={true}>
      <Header></Header>
      {loading ? (
        <Modal>
          <div>
            <VscLoading />
          </div>
        </Modal>
      ) : (
        <></>
      )}
      {!developerArray ? (
        <NothingHereBox>
          <h3>Não há nada aqui</h3>
          <p>Você pode adicionar um novo desenvolvedor...</p>
        </NothingHereBox>
      ) : (
        <BoxGeral>
          <Fade triggerOnce={false}>
            <Box>
              {developerArray.map((developer) => (
                <BoxContent sucess={developer.sexo} key={developer.id}>
                  <h3>
                    {developer.nome}, {developer.idade} anos
                  </h3>
                  <p>hobby: {developer.hobby}</p>
                  <p>
                    <em>data de nascimento: {developer.datanascimento}</em>
                  </p>

                  <ButtonPage
                    sucess={developer.sexo}
                    onClick={() => history.push("/update")}
                  >
                    <ImProfile />
                  </ButtonPage>
                </BoxContent>
              ))}
            </Box>
          </Fade>

          <BoxPage>
            <Link duration={500} activeClass="active" to="section0">
              <ButtonRow onClick={() => setUrl(prev)} disabled={!prev}>
                <FiArrowLeft />
              </ButtonRow>
              <ButtonRow onClick={() => setUrl(next)} disabled={!next}>
                <FiArrowRight />
              </ButtonRow>
            </Link>
          </BoxPage>
        </BoxGeral>
      )}
    </Slide>
  );
};

export default Home;
