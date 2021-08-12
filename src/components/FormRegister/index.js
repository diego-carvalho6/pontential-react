import Header from "../Header";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";
import Input from "@material-ui/core/Input";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { BoxForm, BoxInput, BoxInputR, InputEnvio, Modal } from "./style";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useHistory } from "react-router";

const FormRegister = () => {
  const [valueForm, setValueForm] = useState("X");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleChange = (event) => {
    setValueForm(event.target.value);
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  console.log(window.innerHeight);

  const onSubmit = (data) => {
    setLoading(!loading);

    axios
      .post("http://127.0.0.1:8000/developers", data)
      .then(() => {
        setLoading(!loading);
        history.push("/");
      })
      .catch((e) => setLoading(!loading));
  };

  return (
    <>
      <Header></Header>
      {loading ? (
        <Modal>
          <div>
            <VscLoading />
          </div>
        </Modal>
      ) : (
        console.log()
      )}
      <BoxForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          rules={{ required: true }}
          name="what_now"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <BoxInput>
              <TextField label="Nome" variant="outlined" {...field} />
            </BoxInput>
          )}
        />
        <Controller
          rules={{ required: true }}
          name="what_now"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <BoxInput>
              <TextField label="Idade" variant="outlined" {...field} />
            </BoxInput>
          )}
        />
        <Controller
          rules={{ required: true }}
          name="what_now"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <BoxInput>
              <TextField label="Hobby" variant="outlined" {...field} />
            </BoxInput>
          )}
        />

        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={valueForm}
          onChange={handleChange}
          label="gender"
        >
          <BoxInputR>
            <FormControlLabel
              checked={valueForm === "F"}
              value={"F"}
              control={<Radio />}
              label="Feminino"
            />
            <FormControlLabel
              checked={valueForm === "M"}
              value={"M"}
              control={<Radio />}
              label="Masculino"
            />
            <FormControlLabel
              checked={valueForm === "X"}
              value={"X"}
              control={<Radio />}
              label="outro"
            />
          </BoxInputR>
        </RadioGroup>

        <InputEnvio type="submit" />
      </BoxForm>
    </>
  );
};
export default FormRegister;
