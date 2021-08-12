import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
const DeleteDeveloper = ({ id, update, handleChange }) => {
  const [deletedDeveloper, setDeletedDeveloper] = useState(false);
  const history = useHistory();
  const handleData = () => {
    axios
      .delete(`http://127.0.0.1:8000/developers/${id}`)
      .then((res) => {
        setDeletedDeveloper(true);
        setTimeout(() => {
          update(true);
          handleChange(id);
        }, 1300);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
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
    </div>
  );
};
export default DeleteDeveloper;
