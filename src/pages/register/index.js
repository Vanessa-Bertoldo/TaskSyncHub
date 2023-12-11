import React from "react";
import { makeStyles, Grid, Box, Button, Typography } from "@material-ui/core";
import HookFormProvider from "../../componets/formProvider";
import { useForm } from "react-hook-form";
import RHFTextField from "../../hookForms/RHFTextField";
import logo from "../../assets/taskHub.png"
import { useStyles } from "../../assets/globalStyles/useStylesGlobal";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { dispatchDataRegister } from "../../slices/sliceRegister";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'; 
import Alert from "../../utils/alert/dialogAlert"

function Register() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const defaultValues = React.useMemo(() => ({}),[])

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Dados inválidos"),
    password: yup.string().required("Dados inválidos"),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Os campos devem ser iguais')
    .required('Dados inválidos'),
    
});

  const methods = useForm({
    resolver:     yupResolver(schema),
    defaultValues
  })

  const {
    getValues,
    setValue,
    trigger,
    control
  } = methods

  async function checkCredentials() {
    const submit = await trigger()
    if(submit){
      console.log("getvalues ", getValues())
      const values = getValues()
      const result = await dispatch(dispatchDataRegister(values))
      Alert({title: "Sucesso", text: "Dados cadastrados com sucesso", icon:"success"})
      navigate("/")
    }
   
  }

  return (
    <Grid container justify="center" alignItems="center" style={{ height: '100vh' }} className={classes.background}>
      <Grid item xs={10} sm={4} md={2}>
        <div className={classes.centerSquare}>
          <HookFormProvider methods={methods}>
            <Box className={classes.width100}>
              <Grid container direction="column" spacing={3} alignItems="center" className={classes.width100}>
                <Grid item>
                  <img src={logo} alt="Logo" className={classes.logo} />
                </Grid>
                <Grid item className={classes.width100}>
                  <RHFTextField name="name" label="Nome completo" />
                </Grid>
                <Grid item className={classes.width100}>
                  <RHFTextField name="email" label="Email" />
                </Grid>
                <Grid item className={classes.width100}>
                  <RHFTextField name="password" label="Senha" />
                </Grid>
                <Grid item className={classes.width100}>
                  <RHFTextField name="passwordConfirm" label="Confirme sua senha" />
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
