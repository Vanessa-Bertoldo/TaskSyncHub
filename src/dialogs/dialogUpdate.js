import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { closeDialog, emptyData, insertTask, openDialogUpdate, updateStatusTasks } from "../slices/sliceDialogUpdate"
import RHFTextField from "../hookForms/RHFTextField"
import HookFormProvider from "../componets/formProvider"
import { useForm } from "react-hook-form"
import React, { useEffect } from "react"
import { AlertYesNo } from "../utils/alert/alertYesNo"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { format, parseISO, addDays } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

const useStyles = makeStyles({
    width100: {
        width: "100%"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "90%",
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
    },
    overflow: {
        overflowX: "hidden !important"
    }
})

function DialogUpdate(){
    const open = useSelector((state) => state.dialogUpdate.open)
    const status = useSelector((state) => state.dialogUpdate.status)
    const dataLoader = useSelector((state) => state.dialogUpdate.dataTask)
    const classes = useStyles()

    const dispatch = useDispatch()

    const defaultValues = React.useMemo(() => {
        const formattedDate = dataLoader !== null
        ? format(
            addDays(utcToZonedTime(parseISO(dataLoader.date_initial), 'America/Sao_Paulo'), 1),
            'dd/MM/yyyy'
          )
        : '';
        return {
          title: dataLoader !== null ? dataLoader.title : '',
          description: dataLoader !== null ? dataLoader.description : '',
          date: formattedDate,
        };
      }, [dataLoader]);

    const emptyFields = React.useMemo(() => ({
        title: "",
        description: ""
    }))

    const schema = yup.object().shape({
        title: yup.string().required("Preencha o campo"),
        description: yup.string().required("Preencha o campo"),
      });
    
      const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues
      });
    

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
        const submit = await trigger()
        if(submit){
            const values = getValues()
            dispatch(closeDialog())
            await AlertYesNo({async onClickConfirm(){
                if(dataLoader === null){
                    //insert
                    await dispatch(insertTask(values, status))
                } else {
                    //update
                    await dispatch(updateStatusTasks(values, dataLoader))
                }
                
                
            }, onCancel(){
                dispatch(openDialogUpdate())
            },
            title: "Aviso",
            text: "Deseja salvar dados?",
            icon: "warning"})
        }
       
    }

    return(
        <Dialog
            open={open}
            maxWidth={"sm"}
            onClose={onClose}
            fullWidth={true}
            style={{ overflowX: 'hidden' }}
            PaperProps={{
              style: {
                overflowX: 'hidden',
              },
            }}
        >
            <DialogTitle className={`${classes.alignCenter}`}>Editar tarefas</DialogTitle>
            <DialogContent className={`${classes.width100} ${classes.overflow}`}>
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
                        <RHFTextField
                            disabled
                            name="date"
                            label="Data criação"
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