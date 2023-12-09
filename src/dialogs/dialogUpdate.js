import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { closeDialog } from "../slices/sliceDialogUpdate"
import RHFTextField from "../hookForms/RHFTextField"
import HookFormProvider from "../componets/formProvider"
import { useForm } from "react-hook-form"
import React from "react"

const useStyles = makeStyles({
    width100: {
        width: "100%"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "auto",
        rowGap: "20px"
    }, 
    alignCenter: {
        textAlign: "center"
    },
    buttonRed: {
        backgroundColor: "#ED2222",
        padding: "10px",
        color: "#fff",
        fontStyle: "bold"
    },
    buttonGreen: {
        backgroundColor: "#3DA933",
        padding: "10px",
        color: "#fff",
        fontStyle: "bold"
    },
    padding20: {
        padding: "20px"
    }
})

function DialogUpdate(){
    const open = useSelector((state) => state.dialogUpdate.open)
    const classes = useStyles()

    const dispatch = useDispatch()

    const onClose = () => {
        dispatch(closeDialog())
    }

    const defaultValues = React.useMemo(() => ({
      
    }),[])

    const methods = useForm({
        defaultValues
    })

    const {
        getValues,
        setValue,
        trigger,
        control
    } = methods

    return(
        <Dialog
            open={open}
            maxWidth={"sm"}
            onClose={onClose}
            fullWidth={true}
        >
            <DialogTitle className={`${classes.alignCenter}`}>Editar tarefa</DialogTitle>
            <DialogContent className={`${classes.width100}`}>
                <HookFormProvider methods={methods}>
                    <Box className={`${classes.grid}`}>
                        <RHFTextField
                            name="title"
                            label="Titulo"
                            rows={1}
                        />
                        <RHFTextField
                            name="description"
                            label="Descrição"
                            rows={5}
                        />
                    </Box>
                </HookFormProvider>
            </DialogContent>
            <DialogActions className={`${classes.padding20}`}>
                <Button className={`${classes.buttonGreen}`}>SALVAR</Button>
                <Button onClick={onClose} className={`${classes.buttonRed}`}>FECHAR</Button>
            </DialogActions>
        </Dialog>
    )
   
}
export default DialogUpdate