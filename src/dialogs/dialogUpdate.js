import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { closeDialog } from "../slices/sliceDialogUpdate"
import RHFTextField from "../hookForms/RHFTextField"

function DialogUpdate(){
    const open = useSelector((state) => state.dialogUpdate.open)
    const dispatch = useDispatch()

    const onClose = () => {
        dispatch(closeDialog())
    }

    return(
        <Dialog
            open={open}
            maxWidth={"sm"}
            onClose={onClose}
        >
            <DialogTitle>Editar tarefa</DialogTitle>
            <DialogContent>
                
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose}>FECHAR</Button>
            </DialogActions>
        </Dialog>
    )
   
}
export default DialogUpdate