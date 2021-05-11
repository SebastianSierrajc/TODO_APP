import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { logUser } from '../store/slices/userSlice';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(2, 3),
    },
  },
  form_button: {
    alignSelf: 'center',
  },
  newUser: {
    margin: theme.spacing(2, 0),
    '& > *': {
      margin: theme.spacing(2, 3),
    },
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const [form, setForm] = useState({
    email: '',
    password: '',
    showPassword: false,
    keepLogged: false,
    emailError: false,
    passwordError: false,
    emailMsg: null,
    passwordMsg: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setForm({ ...form, showPassword: !form.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleKeepLogged = () => {
    setForm({ ...form, keepLogged: !form.keepLogged });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await props.logUser({
        email: form.email,
        password: form.password,
        keepLogged: form.keepLogged,
      });
      unwrapResult(resultAction);
      setForm({
        ...form,
        email: '',
        password: '',
      });
    } catch (err) {
      if (err.message === 'BAD_EMAIL') {
        setForm({
          ...form,
          passwordMsg: null,
          passwordError: false,
          emailMsg: 'Invalid email',
          emailError: true,
          password: '',
        });
      } else if (err.message === 'BAD_PASSWORD') {
        setForm({
          ...form,
          passwordMsg: 'Incorrect password',
          passwordError: true,
          emailMsg: null,
          emailError: false,
          password: '',
        });
      } else {
        console.error('Failed to logged in user', err);
      }
    }
  };

  return (
    <>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <FormControl variant='outlined' required error={form.emailError}>
          <InputLabel htmlFor='input-email'>Email</InputLabel>
          <OutlinedInput
            name='email'
            id='input-email'
            label='Email'
            type='email'
            onChange={handleChange}
            value={form.email}
            startAdornment={(
              <InputAdornment position='start'>
                <EmailIcon />
              </InputAdornment>
            )}
          />
          <FormHelperText id='input-email'>{form.emailMsg}</FormHelperText>
        </FormControl>
        <FormControl variant='outlined' required error={form.passwordError}>
          <InputLabel htmlFor='input-password'>Password</InputLabel>
          <OutlinedInput
            name='password'
            id='input-password'
            label='Password'
            type={form.showPassword ? 'text' : 'password'}
            onChange={handleChange}
            value={form.password}
            startAdornment={(
              <InputAdornment position='start'>
                <LockIcon />
              </InputAdornment>
            )}
            endAdornment={(
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {form.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )}
          />
          <FormHelperText id='input-password'>{form.passwordMsg}</FormHelperText>
        </FormControl>
        <Button type='submit' className={classes.form_button} variant='contained' color='primary'>Log in</Button>
        <FormControlLabel
          control={(
            <Switch
              checked={form.keepLogged}
              onChange={handleKeepLogged}
              name='KeepLogged'
              color='primary'
            />
          )}
          label='Keep me logged in'
        />
        <Typography variant='body2'>
          <Link href='/login' color='textSecondary'>
            Forgot your password?
          </Link>
        </Typography>
      </form>
      <Divider variant='middle' />
      <div className={classes.newUser}>
        <Typography align='center' variant='body1'>
          {"Don't have an account? "}
          <Link href='/singup'>Sing Up</Link>
        </Typography>
        <Typography align='center' variant='body2'>
          <Link href='/singup' color='textSecondary'>TODO Team support</Link>
        </Typography>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  logUser,
};

export default connect(null, mapDispatchToProps)(LoginForm);
