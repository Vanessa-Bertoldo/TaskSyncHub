import { Box, Button, makeStyles } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';

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
        height: "70vh"
    },
    button: {
        borderRadius: "32px"
    }, 
    icon:{
        width: "50px",
        height: "50px"
    }, 
    fontStyle: {
        fontFamily: "Arial",
        fontSize: '1.5rem',
       
    }
})

function GridTask({title, onHandleClick}){
    const classes = useStyles()

    return(
        <>
            <Box className={`${classes.alingPaper} ${classes.box} ${classes.height100} ${classes.fontStyle}`}>
                {title}
            </Box>
            <Box className={`${classes.box} `}>
                <Button onClick={onHandleClick} >
                    <AddIcon className={classes.icon}/>
                </Button> 
            </Box>
        </>
    )

}
export default GridTask