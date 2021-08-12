import Header from "../Header";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
import { Link } from "react-scroll";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import {
  BoxForm,
  BoxInput,
  BoxInputR,
  BoxSubmit,
  DateInput,
  InputEnvio,
  Modal,
} from "./style";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useHistory } from "react-router";
import { Slide } from "react-awesome-reveal";
const FormRegister = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2000-01-01T21:11:54")
  );
  const [valueForm, setValueForm] = useState("X");
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
    data["datanascimento"] = format(selectedDate, "dd/MM/yyyy");
    console.log(selectedDate.getDay());
    console.log(data.datanascimento);

    axios
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
          defaultValue=""
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
          render={({ field }) => (
            <BoxInput>
              <TextField
                type="number"
                required
                label="Idade"
                variant="outlined"
                {...field}
              />
            </BoxInput>
          )}
        />
        <Controller
          rules={{ required: true }}
          name="hobby"
          control={control}
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
