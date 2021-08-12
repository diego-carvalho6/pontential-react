import axios from "axios";
import Header from "../Header";
import { useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { GiSplitCross } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { VscLoading } from "react-icons/vsc";
import Modal from "@material-ui/core/Modal";
import {
  BoxContent,
  Box,
  BoxGeral,
  ButtonRow,
  ButtonPage,
  NothingHereBox,
  BoxPage,
  TrashButton,
  ModalLoading,
} from "./style";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import { Slide } from "react-awesome-reveal";
import DeleteDeveloper from "../DeleteDeveloper";
const Home = () => {
  const history = useHistory();
  const [id, setId] = useState(0);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [developerArray, setDeveloperArray] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState(
    `http://127.0.0.1:8000/developers?limit=9&search=${search}`
  );
  useEffect(() => {
    setUpdate(false);
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

  const handleChange = (id) => {
    setModal(!modal);
    setId(id);
  };

  return (
    <Slide direction="right" triggerOnce={true}>
      <Header></Header>

      {loading ? (
        <ModalLoading>
          <div>
            <VscLoading />
          </div>
        </ModalLoading>
      ) : (
        <></>
      )}
      <Modal open={modal} onClose={() => handleChange(id)}>
        <DeleteDeveloper
          handleChange={handleChange}
          update={setUpdate}
          id={id}
        />
      </Modal>
      {!developerArray ? (
        <NothingHereBox>
          <h3>Não há nada aqui</h3>
          <p>Você pode adicionar um novo desenvolvedor...</p>
        </NothingHereBox>
      ) : (
        <BoxGeral>
          <Box>
            {developerArray.map((developer) => (
              <BoxContent sucess={developer.sexo} key={developer.id}>
                <TrashButton
                  onClick={() => handleChange(developer.id)}
                  sucess={developer.sexo}
                >
                  <GiSplitCross />
                </TrashButton>

                <h3>
                  {developer.nome}, {developer.idade} anos
                </h3>
                <p>hobby: {developer.hobby}</p>
                <p>
                  <em>data de nascimento: {developer.datanascimento}</em>
                </p>

                <ButtonPage
                  sucess={developer.sexo}
                  onClick={() => history.push(`/update/${developer.id}`)}
                >
                  <ImProfile />
                </ButtonPage>
              </BoxContent>
            ))}
          </Box>

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
