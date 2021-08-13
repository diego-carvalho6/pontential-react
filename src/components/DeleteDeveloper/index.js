import axios from "axios";
import { useState } from "react";
import { BoxAbsolute } from "./style";
const DeleteDeveloper = ({ id, setUpdate, update, handleChange }) => {
  const [deletedDeveloper, setDeletedDeveloper] = useState(false);
  const handleData = () => {
    axios
      .delete(`http://127.0.0.1:8000/developers/${id}`)
      .then((res) => {
        setDeletedDeveloper(true);
        setTimeout(() => {
          setUpdate(!update);
          handleChange(id);
        }, 1300);
      })
      .catch((e) => console.log(e));
  };

  return (
    <BoxAbsolute>
      {!deletedDeveloper ? (
        <div>
          <h4>Tem certeza que deseja deletar?</h4>
          <button onClick={handleData}>DELETAR</button>
        </div>
      ) : (
        <div>
          <h4>Deletado!</h4>
        </div>
      )}
    </BoxAbsolute>
  );
};
export default DeleteDeveloper;
