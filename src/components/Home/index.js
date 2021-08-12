import axios from "axios";
import Header from "../Header";
import { useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import {
  BoxContent,
  Box,
  BoxGeral,
  ButtonRow,
  Sup,
  ButtonPage,
  NothingHereBox,
} from "./style";
import { set } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const [update, setUpdate] = useState(false);
  const [developerArray, setDeveloperArray] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [url, setUrl] = useState("http://127.0.0.1:8000/developers?limit=10");
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setPrev(res.data.previous);
      setNext(res.data.next);
      res.data.results.lenght === 0
        ? setDeveloperArray(false)
        : setDeveloperArray(res.data.results);
    });
  }, [url, update]);

  const updateEvent = (id) => {
    axios
      .patch(`https://check-in-ju.herokuapp.com/api/${id}`, {
        successfully: true,
      })
      .then(() => setUpdate(!update));
  };

  return (
    <>
      <Header></Header>
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
                <h3>
                  {developer.nome}, {developer.idade} anos
                </h3>
                <p>hobby: {developer.hobby}</p>
                <p>
                  <em>data de nascimento: {developer.datanascimento}</em>
                </p>

                <button onClick={() => history.push("/update")}>Perfil</button>
              </BoxContent>
            ))}
          </Box>

          <Box>
            <ButtonRow onClick={() => setUrl(prev)} disabled={!prev}>
              <FiArrowLeft />
            </ButtonRow>
            <ButtonRow onClick={() => setUrl(next)} disabled={!next}>
              <FiArrowRight />
            </ButtonRow>
          </Box>
        </BoxGeral>
      )}
    </>
  );
};

export default Home;
