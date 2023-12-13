import React from 'react';
import { CircularProgress, makeStyles, Backdrop, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    marginTop: theme.spacing(2),
  },
}));

const Loader = ({ open, text }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
      <Typography variant="h5" className={classes.text}>
          Carregando dados...
        </Typography>
    </Backdrop>
  );
};

export default Loader;