import axios from "axios";
import { useEffect, useState } from "react";
import FormRegister from "../FormRegister";
import { useParams } from "react-router";

const UpdateForm = () => {
  const params = useParams();
  const [id, setId] = useState(params.id);
  const [developer, setDeveloper] = useState("");
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/developers/${id}`)
      .then((res) => setDeveloper(res.data))
      .catch((e) => setDeveloper(e));
  }, []);

  return (
    <>
      {developer ? <FormRegister developer={developer}></FormRegister> : <></>}
    </>
  );
};

export default UpdateForm;
