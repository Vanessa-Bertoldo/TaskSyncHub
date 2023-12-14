import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { emptyData } from "../../slices/sliceDialogUpdate";

export const AlertSucess = (props) => {
        return(
        Swal.fire({
            title: props.title,
            text: props.text,
            icon: props.icon
          })
    )
}

/*
function empty(props){
    const dispatch = useDispatch()
    React.useEffect(async () => {
        await dispatch(emptyData())
    }, [props])
}*/