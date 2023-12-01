import { Box, Container, CssBaseline, Grid, makeStyles } from "@material-ui/core"
import Header from "../../componets/header"
import GridTask from "../../componets/gridTask"
import ListCardTask from "../../componets/listCardTask"

const useStyles = makeStyles({
    paddingTop10: {
        paddingTop: "10%",
    },
    alingPaper: {
        padding: 20, 
        textAlign: 'center',
    },
    box: {
        backgroundColor: "#E1E1E1"
    },
    height100: {
        height: "80vh"
    }
})

function PageMain(){
    const classes = useStyles()

    const addTask = () => {

    }

    return(
        <Container className={classes.height100} component="main" maxWidth="lg">
            <CssBaseline/>
            <Box>
                <Header/>
            </Box>
            <Box>
                <Grid container spacing={2} className={`${classes.paddingTop10} ${classes.height100}`}>
                    <Grid item xs={12} sm={4} className={classes.height100}>
                        <GridTask
                            title={"A fazer"}
                            task={<ListCardTask />}
                            onHandleClick={addTask}
                        />
                            
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.height100}>
                        <GridTask
                            title={"Em execução"}
                            onHandleClick={addTask}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.height100}>
                        <GridTask
                            title={"Concluído"}
                            onHandleClick={addTask}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default PageMain