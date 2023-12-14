import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '4rem',
    marginBottom: theme.spacing(2),
  },
  subheading: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(3),
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
    padding: theme.spacing(1, 4),
    textDecoration: 'none',
  },
}));

function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h1" className={classes.heading}>
        404
      </Typography>
      <Typography variant="h4" className={classes.subheading}>
        Página não encontrada
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        className={classes.button}
      >
        Voltar para a Página Inicial
      </Button>
    </div>
  );
}

export default NotFound;
