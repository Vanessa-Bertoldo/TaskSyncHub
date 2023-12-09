import React from "react";
import { makeStyles, Grid, Box, Button, Typography } from "@material-ui/core";
import HookFormProvider from "../../componets/formProvider";
import { useForm } from "react-hook-form";
import RHFTextField from "../../hookForms/RHFTextField";
import logo from "../../assets/taskHub.png"
import backgImage from "../../assets/background.jpg"

const useStyles = makeStyles({
  centerSquare: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
    width: '100%', 
    border: '1px solid #ccc', 
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "auto",
    rowGap: "20px",
    textAlign: "center",
    backgroundColor: "#fff",
    width: "100%"
    }, 
    logo:{
        width: "150px",
        height: "150px",
        
        
    },
    button: {
        width: "100%",
        background: "black",
        color: "white",
        padding: "10px"
    },
    alingBox: {

    },
    background: {
        backgroundImage: `url(${backgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        borderBlockStyle: "none",
    }
});

function Login() {
  const classes = useStyles();

  const defaultValues = React.useMemo(() => ({
      
  }),[])

  const methods = useForm({
      defaultValues
  })

  const {
      getValues,
      setValue,
      trigger,
      control
  } = methods

  return (
    <Grid container justify="center" alignItems="center" style={{ height: '100vh' }} className={classes.background}>
      <Grid item xs={12} sm={6} md={4}>
        <div className={classes.centerSquare}>
        <Box className={`${classes.grid}`}>
            <HookFormProvider methods={methods}>
                <Box className={classes.alingBox}>
                    <img src={logo} className={classes.logo}/>
                </Box>
                <RHFTextField
                    name="user"
                    label="Usuário"
                />
                <RHFTextField
                    name="password"
                    label="Senha"
                />
            </HookFormProvider>
            <Button className={classes.button}>LOGIN</Button>
            <a>
                <Typography variant="body">Não possui conta? Registre-se.</Typography>    
            </a>
        </Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
