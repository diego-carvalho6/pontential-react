import Header from "../Header";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import { Slide } from "react-awesome-reveal";
import { VscLoading } from "react-icons/vsc";
import axios from "axios";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";

import {
  BoxForm,
  BoxInput,
  BoxInputR,
  DateInput,
  InputEnvio,
  Modal,
} from "./style";

const FormRegister = ({ developer }) => {
  const [selectedDate, setSelectedDate] = useState(
    developer
      ? new Date(developer.datanascimento)
      : new Date("2000-01-01T21:11:54")
  );
  const [valueForm, setValueForm] = useState(developer?.sexo || "X");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    setValueForm(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event);
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(!loading);
    data["sexo"] = valueForm;

    data["datanascimento"] = selectedDate?.getDate()
      ? format(selectedDate, "dd/MM/yyyy")
      : "01/01/2000";
    developer
      ? axios
          .put(`http://127.0.0.1:8000/developers/${developer.id}`, data)
          .then((e) => {
            setLoading(false);
            history.push("/");
          })
          .catch((e) => {
            setError(e);
            setLoading(false);
          })
      : axios
          .post("http://127.0.0.1:8000/developers", data)
          .then((e) => {
            setLoading(false);
            history.push("/");
          })
          .catch((e) => {
            setError(e);
            setLoading(false);
          });
  };

  return (
    <Slide triggerOnce={true} direction="left">
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

      <BoxForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          rules={{ required: true }}
          name="nome"
          control={control}
          defaultValue={developer?.nome}
          render={({ field }) => (
            <BoxInput>
              <TextField required label="Nome" variant="outlined" {...field} />
            </BoxInput>
          )}
        />
        <Controller
          rules={{ required: true }}
          name="idade"
          control={control}
          defaultValue={developer?.idade}
          render={({ field }) => (
            <BoxInput>
              <TextField
                type="number"
                required
                label="Idade"
                variant="outlined"
                value={developer?.idade}
                {...field}
              />
            </BoxInput>
          )}
        />
        <Controller
          rules={{ required: true }}
          name="hobby"
          control={control}
          defaultValue={developer?.hobby}
          render={({ field }) => (
            <BoxInput>
              <TextField required label="Hobby" variant="outlined" {...field} />
            </BoxInput>
          )}
        />
        <DateInput>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="block"
              format="dd/MM/yyyy"
              margin="normal"
              id="birthday"
              label="data de nascimento"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </MuiPickersUtilsProvider>
        </DateInput>
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
    </Slide>
  );
};
export default FormRegister;
