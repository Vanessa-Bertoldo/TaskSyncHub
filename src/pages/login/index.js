import React from "react";
import { makeStyles, Grid, Box, Button, Typography } from "@material-ui/core";
import HookFormProvider from "../../componets/formProvider";
import { useForm } from "react-hook-form";
import RHFTextField from "../../hookForms/RHFTextField";
import logo from "../../assets/taskHub.png"
import { useStyles } from "../../assets/globalStyles/useStylesGlobal";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { ckeckLoginUser } from "../../slices/sliceAuth";

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch()

  const defaultValues = React.useMemo(() => ({
    
  }),[])

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Dados inválidos"),
    password: yup.string().required("Dados inválidos"),
    
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

  async function checkLogin() {
    const submit = trigger()
    if(submit){
      const values = getValues()
      await dispatch(ckeckLoginUser(values))
    }
    
  }

  return (
    <Grid container justify="center" alignItems="center" style={{ height: '100vh' }} className={`${classes.background} ${classes.width100}`}>
      <Grid item xs={10} sm={4} md={2}>
        <div className={classes.centerSquare}>
          <HookFormProvider methods={methods}>
            <Box className={classes.width100}>
              <Grid container direction="column" spacing={3} alignItems="center" className={classes.width100}>
                <Grid item>
                  <img src={logo} alt="Logo" className={classes.logo} />
                </Grid>
                <Grid item className={classes.width100}>
                  <RHFTextField 
                    name="email" 
                    label="Email" />
                </Grid>
                <Grid item className={classes.width100}>
                  <RHFTextField 
                    name="password" 
                    label="Senha"
                    />
                </Grid>
                <Grid item className={classes.width100}>
                  <Button className={classes.button} onClick={checkLogin}>LOGIN</Button>
                </Grid>
                <Grid item className={classes.width100} style={{ zIndex: "1" }}>
                  <a href={"/register"} >
                    Não possui conta? Registre-se.
                  </a>
                </Grid>
              </Grid>
            </Box>
          </HookFormProvider>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
