import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import UserNavMenu from './UserNavMenu';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    textTransform: 'capitalize',
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const { user } = props;

  return (
    <header>
      <div className={classes.grow}>
        <AppBar position='sticky'>
          <Toolbar>
            <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='open drawer'>
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant='h6' noWrap>
              <Link href='/' color='inherit' underline='none'>TODO-APP</Link>
            </Typography>
            <div className={classes.grow} />
            {user.isAuth ?
              (
                <UserNavMenu user={user} />
              ) :
              (
                <>
                  <Button className={classes.button} href='/login'>
                    Log in
                  </Button>
                  <Button variant='outlined' size='small' className={classes.button} href='/singup'>
                    <Typography className={classes.title} variant='body2' noWrap>
                      Sing up
                    </Typography>
                  </Button>
                </>
              )}
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Navbar);
