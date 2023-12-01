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
      }
})

const renderRow = (props, classes, status) => {
    const { index, style } = props
    return(
        <ListItem>
            <ListItemText button style={style} key={index}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {data[index].title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {data[index].desc}
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
    )
}

function ListCardTask(){
    const classes = useStyles()
    const dispatch = useDispatch()

    return(
        <Container className={classes.alignContent}>
            <FixedSizeList
                height={600} 
                width={400} 
                itemSize={180} 
                itemCount={15} 
            >
                {(props) => renderRow(props, classes, dispatch)}
            </FixedSizeList>
        </Container>
    )
}
export default ListCardTask