import Swal from "sweetalert2";

export const AlertSucess = (props) => {
    return(
        Swal.fire({
            title: props.title,
            text: props.text,
            icon: props.icon
          })
    )
}