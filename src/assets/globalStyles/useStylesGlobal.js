import { makeStyles } from "@material-ui/core";
import logo from "../../assets/taskHub.png"
import backgImage from "../../assets/background.jpg"

export const useStyles = makeStyles((theme) => ({
    centerSquare: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%', 
      width: '100%', 
      border: '1px solid #ccc', 
      padding: "20px",
      backgroundColor: "#fff",
    },
    centerSquare: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100%',
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "auto",
      rowGap: "20px",
      textAlign: "center",
      width: "100%"
    }, 
    width100: {
      width: "100%",
      
    },
    width80: {
      width: "80%"
    },
    alignCenter: {
      textAlign: "-webkit-center", 
      //text-align: -webkit-center;
    },
    logo:{
      width: '150px',
      height: '150px',
      position: 'relative', 
      zIndex: 1, 
    },
    button: {
      width: "100%",
      background: "black",
      color: "white",
      padding: "10px",
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    alingBox: {
      width: "100%",
    },
    background: {
      position: 'relative',
      backgroundImage: `url(${backgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', 
      height: '100vh',
      margin: 0, 
      overflow: 'hidden', 
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.6)', 
      },
    },
    formContainer: {
      backgroundColor: "white",
      padding:"20px"
    }
  }));