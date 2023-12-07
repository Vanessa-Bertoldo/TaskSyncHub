import { Grid, Typography, makeStyles } from "@material-ui/core";
import perfil from "../../assets/perfil.png"


const useStyles = makeStyles({
    header: {
        width: "100%",
        height: "10%",
        background: "#49423F",
        margin: "none",
        position: "fixed",
        top: 0,
        left: 0,
    },
    background:{
        background: "#49423F",
    },
    title: {
        color: "#fff",
        alignSelf: "center",
        textJustify: "left"
    },
    img:{
        height: "100%"
    },
    alingSelf: {
        alignSelf: "center"
    },
    height100: {
        height: "100%"
    }
  });

function Header(){
    const classes = useStyles()
    return(
        <div className={classes.header}>
            <Grid container spacing={2} className={`${classes.background} ${classes.height100}`}>
                <Grid item xs={6} md={3} lg={1} className={`${classes.background} ${classes.height100}`}>
                    <img src={perfil} className={classes.img}/>
                </Grid>
                <Grid item xs={6} md={3} lg={2} className={`${classes.alingSelf} ${classes.height100}`}>
                    <Typography variant="h4" className={classes.title}>Olá, Vanessa</Typography>
                </Grid>
            </Grid>
        </div>
        
    )
}
export default Header
