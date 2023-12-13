import { Box, Container, CssBaseline, Grid, makeStyles } from "@material-ui/core"
import Header from "../../componets/header"
import GridTask from "../../componets/gridTask"
import ListCardTask from "../../componets/listCardTask"
import { emptyData, openDialogUpdate, sendStatus } from "../../slices/sliceDialogUpdate"
import { useDispatch } from "react-redux"

const useStyles = makeStyles((theme) => ({
    /*'@font-face': [
        {
          fontFamily: 'Poppins-Regular',
          src: `url('${require("../../fonts/poppins/Poppins-Regular.ttf")}') format('truetype')`,
        },
        {
          fontFamily: 'Poppins-Medium',
          src: `url('${require("../../fonts/poppins/Poppins-Medium.ttf")}') format('truetype')`,
        },
        {
          fontFamily: 'Poppins-Bold',
          src: `url('${require("../../fonts/poppins/Poppins-Bold.ttf")}') format('truetype')`,
        },
        {
          fontFamily: 'Poppins-SemiBold',
          src: `url('${require("../../fonts/poppins/Poppins-SemiBold.ttf")}') format('truetype')`,
        },
      ],*/
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
    },
    scrollBarHidden: {
        overflowX: "hidden",
        
    },
    [theme.breakpoints.down('sm')]: {
        height100: {
            height: "auto",
        },
        paddingTop10: {
            paddingTop: "5%",
        },
    },
}))

function PageMain(){
    const classes = useStyles()
    const dispatch = useDispatch()

    const addTask = async (status) => {
        await dispatch(emptyData())
        await dispatch(sendStatus(status))
        await dispatch(openDialogUpdate())
    }

    return(
        <Container className={classes.height100} component="main" maxWidth="lg">
            <CssBaseline/>
            <Box>
                <Header/>
            </Box>
            <Box>
                <Grid container spacing={2} className={`${classes.paddingTop10} ${classes.height100}`}>
                    <Grid item xs={12} sm={6} md={4} className={`${classes.height100} ${classes.scrollBarHidden}`}>
                        <GridTask
                            title={"A fazer"}
                            task={
                                <ListCardTask 
                                status={0}
                                />
                            }
                            onHandleClick={() => addTask(0)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className={`${classes.height100} ${classes.scrollBarHidden}`}>
                        <GridTask
                            title={"Em execução"}
                            task={
                                <ListCardTask 
                                status={1}
                                />
                            }
                            onHandleClick={() => addTask(1)}
                            status={1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className={`${classes.height100} ${classes.scrollBarHidden}`}>
                        <GridTask
                            title={"Concluído"}
                            task={
                                <ListCardTask 
                                status={2}
                                />
                            }
                            onHandleClick={() => addTask(2)}
                            status={2}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default PageMain
