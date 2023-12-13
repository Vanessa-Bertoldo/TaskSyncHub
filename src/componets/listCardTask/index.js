import { Button, Card, CardActionArea, CardActions, CardContent, Container, ListItem, ListItemText, Typography, makeStyles } from "@material-ui/core"
import { FixedSizeList } from 'react-window'
import { getListTask } from "../../utils/cacheConfig";
import { deleteTask, updateStatus } from "../../connection_api/connection/connTasks";
import { AlertYesNo } from "../../utils/alert/alertYesNo";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { closedScreenLoader, openScreenLoader } from "../../slices/sliceScreenLoader";
import { emptyData, loadDataTask, updateStatusTasks } from "../../slices/sliceDialogUpdate";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
      alignContent: {
        alignContent: "center",
        width: "100vh",
      },
      scrollBar: {
        overflowY: "scroll",
        overflowX: "auto"
      }
})
const renderRow = (props, classes, item, handleDeleteTask, handleStartTask, handleUpdate) => {
    const { style } = props;
    
    return (
        <ListItem  style={style} key={item.id} onDoubleClick={() => handleUpdate(item)}>
            <ListItemText>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => handleDeleteTask(item)}>
                            Excluir
                        </Button>
                        <Button size="small" color="primary" onClick={() => handleStartTask(item)}>
                            {item.status === 0 ? "Iniciar tarefa" : item.status === 1 ? "Concluir tarefa" : ""}
                        </Button>
                    </CardActions>
                </Card>
            </ListItemText>
        </ListItem>
    );
};


function ListCardTask({ status }) {

    const [list, setList] = useState([])

    React.useEffect(() => {
        setList(getListTask())
    },[])


    const classes = useStyles()
    const data = list
    const dispatch = useDispatch()

    const handleDeleteTask = async (task) => {
        await AlertYesNo({async onClickConfirm(){
            console.log("indo morrer")
            await dispatch(deleteTask(task.id))
            window.location.reload();
        }, onCancel(){
            
        },
        title: "Aviso",
        text: "Os dados serão excluídos permanentemente, deseja prosseguir?",
        icon: "warning"})
        console.log("Data update", task)
    }

    const handleStartTask = async (data) => {
        console.log("Data ", data) 
        await AlertYesNo({async onClickConfirm(){
            data.status += 1
            dispatch(openScreenLoader())
            await dispatch(updateStatusTasks(data))
            dispatch(closedScreenLoader())
        }, onCancel(){
           
        },
        title: "Aviso",
        text: data.status === 0 ? "Deseja iniciar tarefa? " : "Deseja concluir tarefa?",
        icon: "warning"})
        const dataUpdate = {}
        
       
    }

    
    const handleUpdate = async (data) => {
        dispatch(openScreenLoader())
        await dispatch(loadDataTask(data))
        dispatch(closedScreenLoader())
    }
    const filteredData = data.filter(item => item.status === status);

    return (
        <Container className={`${classes.alignContent}`}>
            <FixedSizeList
                height={600}
                width={400}
                itemSize={180}
                itemCount={filteredData.length}
            >
                {(props) => renderRow(
                    props, 
                    classes, 
                    filteredData[props.index],
                    handleDeleteTask, 
                    handleStartTask,
                    handleUpdate
                )}
            </FixedSizeList>
        </Container>
    );
}

export default ListCardTask;