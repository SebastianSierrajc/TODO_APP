import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'auto',
    marginBottom: 'auto',
    height: 'calc(100% - 64px)',
  },
  title: {

  },
  box: {
    margin: theme.spacing(0, '1%'),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, '25%'),
    },
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'end',
    justifyContent: 'center',
  },
  form_container: {
    marginTop: theme.spacing(2),
  },
  form_paper: {
    padding: theme.spacing(2),
  },
  messages: {
    marginTop: theme.spacing(2),
    alignSelf: 'center',
    justifySelf: 'rigth',
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container className={classes.root}>
        <Box className={classes.box}>
          <div>
            <Typography variant='h3'>
              Log In
            </Typography>
          </div>
          <div className={classes.form_container}>
            <Paper className={classes.form_paper} elevation={4}>
              <LoginForm />
            </Paper>
          </div>
          <div className={classes.messages}>
            <Typography variant='body2'>
              To keep connected with us please login with your personal info
            </Typography>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Login;
