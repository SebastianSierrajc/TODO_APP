import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      { children }
      <Footer />
    </div>
  );
};

export default Layout;
