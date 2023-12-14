import React from "react";
import { makeStyles, Grid, Box, Button, Typography, TextField } from "@material-ui/core";
import HookFormProvider from "../../componets/formProvider";
import { useForm } from "react-hook-form";
import RHFTextField from "../../hookForms/RHFTextField";
import logo from "../../assets/taskHub.png";
import { useStyles } from "../../assets/globalStyles/useStylesGlobal";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { dispatchDataRegister } from "../../slices/sliceRegister";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'; 
import Alert from "../../utils/alert/dialogAlert";
import { AlertSucess } from "../../utils/alert/alertSucess";
import RHFTextFieldPassword from "../../hookForms/RHFTextFieldPassword";

function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultValues = React.useMemo(() => ({}),[]);

  const schema = yup.object().shape({
    name: yup.string().required("Preencha o campo"),
    email: yup.string().email("Email inválido").required("Preencha o campo"),
    password: yup.string().required("Preencha o campo"),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Os campos devem ser iguais')
      .required('Preencha o campo'),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });

  const {
    getValues,
    trigger,
  } = methods;

  async function checkCredentials() {
    console.log("getvalues ", getValues());
    const submit = await trigger();
    if(submit){
      console.log("getvalues ", getValues());
      const values = getValues();
      const result = await dispatch(dispatchDataRegister(values));
      console.log("res ", result)
      if(result === 200){
        await AlertSucess({title: "Sucesso", text: "Dados inseridos com sucesso", icon: "success"})
        navigate("/");
      }
      
      
    }
  }

  return (
    <Grid container justify="center" alignItems="center" style={{ height: '100vh' }} className={classes.background}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <div className={classes.centerSquare}>
          <HookFormProvider methods={methods}>
            <Box className={`${classes.width80}`}>
              <Grid container direction="column" spacing={3} alignItems="center" className={`${classes.width100} ${classes.alignCenter}  ${classes.formContainer}`}>
                <Grid item>
                  <img src={logo} alt="Logo" className={classes.logo} />
                </Grid>
                <Grid item className={classes.width100}>
                  <RHFTextField name="name" label="Nome completo" />
                </Grid>
                <Grid item className={classes.width100}>
                  <RHFTextField name="email" label="Email" />
                </Grid>
                <Grid item className={classes.width100} type={"password"}>
                  <RHFTextFieldPassword name="password" label="Senha"/>
                </Grid>
                <Grid item className={classes.width100}>
                  <RHFTextFieldPassword name="passwordConfirm" label="Confirme sua senha"/>
                </Grid>
                <Grid item className={classes.width100}>
                  <Button className={classes.button} onClick={checkCredentials}>REGISTRAR-ME</Button>
                </Grid>
              </Grid>
            </Box>
          </HookFormProvider>
        </div>
      </Grid>
    </Grid>
  );
}

export default Register;
