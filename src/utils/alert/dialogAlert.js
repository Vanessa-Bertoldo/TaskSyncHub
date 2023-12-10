import swal from "sweetalert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "Arial, sans-serif",
  },
});

function Alert(dto) {
  const classes = useStyles();

  return (
    swal({
      title: dto.title,
      text: dto.text,
      icon: dto.icon,
      dangerMode: true,
      content: {
        element: "div",
        attributes: {
          class: classes.root,
        },
      },
    })
  );
}
export default Alert