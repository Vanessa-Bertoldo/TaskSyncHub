import { Button, Card, CardActionArea, CardActions, CardContent, Container, ListItem, ListItemText, Typography, makeStyles } from "@material-ui/core"
import data from "../../assets/listTask/list.json"
import { useDispatch } from "react-redux"
import { FixedSizeList } from 'react-window'

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
const renderRow = (props, classes, item) => {
    const { style } = props;

    const handleStartTask = (data) => {
        console.log("Data ", data)
    }

    const handleUpdate = (data) => {
        console.log("Data update", data)
    }

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
                                {item.desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Excluir
                        </Button>
                        <Button size="small" color="primary" onClick={() => handleStartTask(item)}>
                            Iniciar tarefa
                        </Button>
                    </CardActions>
                </Card>
            </ListItemText>
        </ListItem>
    );
};

function ListCardTask({ status }) {
    const classes = useStyles();

    const filteredData = data.filter(item => item.status === status);

    return (
        <Container className={`${classes.alignContent}`}>
            <FixedSizeList
                height={600}
                width={400}
                itemSize={180}
                itemCount={filteredData.length}
            >
                {(props) => renderRow(props, classes, filteredData[props.index])}
            </FixedSizeList>
        </Container>
    );
}

export default ListCardTask;