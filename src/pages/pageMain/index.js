import { Box, Container, CssBaseline, Grid, makeStyles } from "@material-ui/core"
import Header from "../../componets/header"
import GridTask from "../../componets/gridTask"
import ListCardTask from "../../componets/listCardTask"
import { emptyData, openDialogUpdate, sendStatus } from "../../slices/sliceDialogUpdate"
import { useDispatch } from "react-redux"

const useStyles = makeStyles((theme) => ({
    header: {
        zIndex: theme.zIndex.drawer + 1,
        height: "5%",
        paddingBottom: "10%",
        position: "sticky", 
        top: 0,  
    },
    paddingTop10: {
        paddingTop: "5%",
        [theme.breakpoints.down('sm')]: {
          paddingTop: "15%", 
        },
      },
    
    alingPaper: {
        padding: 20, 
        textAlign: 'center',
    },
    box: {
        backgroundColor: "#E1E1E1"
    },
    height100: {
        height: "80%"
    },
    scrollBarHidden: {
        overflowX: "hidden",
        overflowY: "hidden",
    },
    [theme.breakpoints.down('sm')]: {
        height100: {
            height: "auto",
        },
        paddingTop10: {
            paddingTop: "5%",
        },
    },
    gridCard: {
        borderRadius: "16px"
    },
    [theme.breakpoints.down('sm')]: {        
        padding: "15px"
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
            <Box className={classes.header}>
                <Header/>
            </Box>
            <Box>
                <Grid container spacing={3} className={`${classes.paddingTop10} ${classes.height100}`}>
                    <Grid item xs={12} sm={6} md={4} className={`${classes.height100}  ${classes.scrollBarHidden}`}>
                        <GridTask
                            title={"A FAZER"}
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
                            title={"EM EXECUÇÃO"}
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
                            title={"CONCLUÍDO"}
                            task={
                                <ListCardTask 
                                    className={classes.customScrollbar}
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
