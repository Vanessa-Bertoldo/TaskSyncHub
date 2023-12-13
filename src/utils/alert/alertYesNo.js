import Swal from "sweetalert2";

export const AlertYesNo = (props) => {

  Swal.fire({
    title: props.title,
    text: props.text,
    icon: props.icon,
    showCancelButton: true,
    confirmButtonColor: "#00C84B",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Sim"
    
  }).then((result) => {
    if (result.isConfirmed) {
      props.onClickConfirm()
    } else {
       props.onCancel()
    }
  });
};