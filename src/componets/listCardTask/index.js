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
const renderRow = (props, classes, status) => {
    const { index, style } = props;
    const currentItem = data[index];

    const newData = [...data]
    newData.sort((a, b) => a.status - b.status);

    console.log("newData ", newData)

    if (currentItem.status === status) {
        return (
            <ListItem button style={style} key={index}>
                <ListItemText>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {newData[index].title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {newData[index].desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Excluir
                            </Button>
                            <Button size="small" color="primary">
                                Iniciar tarefa
                            </Button>
                        </CardActions>
                    </Card>
                </ListItemText>
            </ListItem>
        );
    }

    // Retorna null para pular a renderização do item
    return null;
};

function ListCardTask({ status }) {
    const classes = useStyles();

    return (
        <Container className={`${classes.alignContent}`}>
            <FixedSizeList
                height={600}
                width={400}
                itemSize={180}
                itemCount={17}
            >
                {(props) => renderRow(props, classes, status)}
            </FixedSizeList>
        </Container>
    );
}

export default ListCardTask;
