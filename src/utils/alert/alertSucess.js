import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { emptyData } from "../../slices/sliceDialogUpdate";

export const AlertSucess = (props) => {
    const dispatch = useDispatch()
    React.useEffect(async () => {
        await dispatch(emptyData())
    }, [props])

    console.log("fui chamado ")
    return(
        Swal.fire({
            title: props.title,
            text: props.text,
            icon: props.icon
          })
    )
}