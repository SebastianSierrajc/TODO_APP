import React, { useState } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';
import UserAvatar from './UserAvatar';

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
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  smallAvatar: {
    height: theme.spacing(3),
    width: theme.spacing(3),
  },
}));

const UserNavMenu = ({ user }) => {
  const classes = useStyles();
  const u = user.entities[user.ids[0]];
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const isUserMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileAnchorEl);

  const handleUserMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMobileMenu = (e) => {
    setMobileAnchorEl(e.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const userMenuId = 'menu-user-navbar';
  const renderUserMenu = (
    <Menu
      id={userMenuId}
      anchorEl={anchorEl}
      open={isUserMenuOpen}
      onClose={handleUserMenuClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
    >
      <MenuItem onClick={handleUserMenuClose}>
        <Link href='/' color='textPrimary' underline='none'>Profile</Link>
      </MenuItem>
      <MenuItem onClick={handleUserMenuClose}>
        <Link href='/' color='textPrimary' underline='none'>Setting</Link>
      </MenuItem>
      <MenuItem onClick={handleUserMenuClose}>
        <Link href='/' color='textPrimary' underline='none'>Log out</Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'menu-mobile-navbar';
  const renderMobileMenu = (
    <Menu
      id={mobileMenuId}
      anchorEl={mobileAnchorEl}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton aria-label='show new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
        </IconButton>
        Messages
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton aria-label='show  new notifications' color='inherit'>
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        Notifications
      </MenuItem>
      <MenuItem onClick={handleUserMenu}>
        <IconButton
          aria-label='account of current user'
          aria-controls='menu-user-navbar'
          aria-haspopup='true'
          color='inherit'
        >
          <UserAvatar user={u} isMobile />
        </IconButton>
        <p>{u.name.split(' ')[0].toUpperCase()}</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.sectionDesktop}>
        <IconButton aria-label='show new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label='show  new notifications' color='inherit'>
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          aria-label='account of current user'
          aria-controls={userMenuId}
          onClick={handleUserMenu}
        >
          <UserAvatar user={u} isMobile={false} />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label='show more'
          aria-controls={mobileMenuId}
          aria-haspopup='true'
          onClick={handleMobileMenu}
          color='inherit'
        >
          <MoreIcon />
        </IconButton>
      </div>

      {renderMobileMenu}
      {renderUserMenu}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(UserNavMenu);
