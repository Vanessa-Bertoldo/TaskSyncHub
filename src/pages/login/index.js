import React from "react";
import { Grid, Box, Button, Typography, Container } from "@material-ui/core";
import HookFormProvider from "../../componets/formProvider";
import { useForm } from "react-hook-form";
import RHFTextField from "../../hookForms/RHFTextField";
import logo from "../../assets/taskHub.png";
import { useStyles } from "../../assets/globalStyles/useStylesGlobal";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { ckeckUser } from "../../connection_api/connection/connAuth";
import { useNavigate } from "react-router-dom";
import { closedScreenLoader, openScreenLoader } from "../../slices/sliceScreenLoader";
import { setDataLogin } from "../../utils/cacheConfig";
import { AlertSucess } from "../../utils/alert/alertSucess";
import RHFTextFieldPassword from "../../hookForms/RHFTextFieldPassword";

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultValues = React.useMemo(() => ({}), []);

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Dados inválidos"),
    password: yup.string().required("Dados inválidos"),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });

  const {
    getValues,
    trigger,
  } = methods;

  async function checkLogin() {
    const submit = await trigger();
    if (submit) {
      const values = getValues();
      dispatch(openScreenLoader());
      const response = await dispatch(ckeckUser(values));
      if (response.status === 200 && response.data !== null) {
        const data = response.data;
        await setDataLogin({ id: data.id, name: data.name, email: data.email, password: data.password });
        navigate("/inicio");
      } else {
        await AlertSucess({ title: "Erro", text: "Usuário ou senha incorretos", icon: "error" });
      }
      dispatch(closedScreenLoader());
      console.log("response ", response);
    }
  }

  return (
    <Grid style={{ height: '100vh', width: '100vw' }} className={`${classes.background} ${classes.width100} `}>
      <Grid container style={{ height: '100vh', width: '100vw' }} className={`${classes.background} ${classes.width100}`}>
  <Grid container justify="center" alignItems="center" className={`${classes.centerSquare} ${classes.width100}`}>
    <Grid item xs={12} sm={8} md={6} lg={4}>
      <div className={classes.centerSquare}>
        <HookFormProvider methods={methods}>
          <Box p={3} className={`${classes.width100} ${classes.formContainer}`}>
            <Grid container direction="column" spacing={3} alignItems="center">
              <Grid item xs={12}>
                <img src={logo} alt="Logo" className={classes.logo} />
              </Grid>
              <Grid item className={classes.width100} xs={12}>
                <RHFTextField name="email" label="Email" />
              </Grid>
              <Grid item className={classes.width100} xs={12}>
                <RHFTextFieldPassword name="password" label="Senha"/>
              </Grid>
              <Grid item className={classes.width100} xs={12}>
                <Button className={classes.button} fullWidth onClick={checkLogin}>
                  LOGIN
                </Button>
              </Grid>
              <Grid item style={{ zIndex: "1" }} xs={12}>
                <Typography variant="body2">
                  Não possui conta? <a href="/register">Registre-se</a>.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </HookFormProvider>
      </div>
    </Grid>
  </Grid>
</Grid>
  </Grid>
  );
}

export default Login;
