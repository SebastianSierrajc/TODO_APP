import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.secondary.dark,
    marginTop: 'auto',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography align='center' variant='body2'>
        {'Created by '}
        <Link href='https://github.com/SebastianSierrajc' rel='noopener' target='_blank'>
          Sebastian Sierra
        </Link>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
};

export default Footer;
