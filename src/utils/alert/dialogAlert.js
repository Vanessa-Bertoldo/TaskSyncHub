import swal from "sweetalert";

function Alert(dto){
    return(
        swal({
            title: dto.title,
            text: dto.text,
            icon: dto.icon,
            dangerMode: true,
           
          })
    )
}
export default Alert