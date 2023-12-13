import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { closeDialog, emptyData, insertTask, openDialogUpdate, updateStatusTasks } from "../slices/sliceDialogUpdate"
import RHFTextField from "../hookForms/RHFTextField"
import HookFormProvider from "../componets/formProvider"
import { useForm } from "react-hook-form"
import React, { useEffect } from "react"
import { AlertYesNo } from "../utils/alert/alertYesNo"

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
    const status = useSelector((state) => state.dialogUpdate.status)
    const dataLoader = useSelector((state) => state.dialogUpdate.dataTask)
    const classes = useStyles()

    const dispatch = useDispatch()

    const defaultValues = React.useMemo(() => ({
      title: dataLoader !== null ? dataLoader.title : "",
      description: dataLoader !== null ? dataLoader.description : ""
    }),[dataLoader])

    const emptyFields = React.useMemo(() => ({
        title: "",
        description: ""
    }))

    const methods = useForm({
        defaultValues
    })

    const {
        getValues,
        setValue,
        trigger,
        reset,
        control
    } = methods

    useEffect(() => {
        reset(defaultValues)
    },[dataLoader])

    const onClose = async () => {
        reset(emptyFields)
        await dispatch(emptyData())
        dispatch(closeDialog())
    }

    const handleSave = async () => {
        console.log("dataaaaa ", dataLoader)
        const values = getValues()
        dispatch(closeDialog())
        await AlertYesNo({async onClickConfirm(){
            if(dataLoader === null){
                await dispatch(insertTask(values, status))
                console.log("inserir ")
            } else {
                await dispatch(updateStatusTasks(values, dataLoader))
                console.log("update")
            }
            
            
        }, onCancel(){
            dispatch(openDialogUpdate())
        },
        title: "Aviso",
        text: "Deseja salvar dados?",
        icon: "warning"})
    }

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
                           
                        />
                        <RHFTextField
                            name="description"
                            label="Descrição"
                            minRows={5}
                            maxRows={10} 
                        />
                    </Box>
                </HookFormProvider>
            </DialogContent>
            <DialogActions className={`${classes.padding20}`}>
                <Button className={`${classes.buttonGreen}`} onClick={handleSave}>SALVAR</Button>
                <Button onClick={onClose} className={`${classes.buttonRed}`}>FECHAR</Button>
            </DialogActions>
        </Dialog>
    )
   
}
export default DialogUpdate