import React, { useState } from "react";
import { Grid, IconButton, Menu, MenuItem, Typography, makeStyles } from "@material-ui/core";
import logo from "../../assets/taskHub.png";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useNavigate } from "react-router-dom";
import { AlertYesNo } from "../../utils/alert/alertYesNo";
import { setDataLogin } from "../../utils/cacheConfig";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "80px",
    background: "#000",
    margin: "none",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  img: {
    height: "60px",
    maxWidth: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 'bold'
  },
  menuButton: {
    color: "#fff",
  },
  icon: {
    color: "#fff",
    fontSize: 30,
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = async () => {
    await AlertYesNo({
      async onClickConfirm() {
        navigate("/");
        handleClose();
      },
      onCancel() {
        handleClose();
      },
      title: "Aviso",
      text: "Deseja sair da aplicação?",
      icon: "warning",
    });
  };

  return (
    <div className={classes.header}>
      <img src={logo} className={classes.img} alt="Logo" />
      <Typography className={classes.title}>Task Hub</Typography>
      <IconButton className={classes.menuButton} aria-controls="header-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon className={classes.icon} />
      </IconButton>
      <Menu
        id="header-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOptionClick}>Sair</MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
