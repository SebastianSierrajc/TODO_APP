import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  smallAvatar: {
    height: (isMobile) => (isMobile ?
      theme.spacing(3) :
      theme.spacing(5)),
    width: (isMobile) => (isMobile ?
      theme.spacing(3) :
      theme.spacing(5)),
  },
}));

const UserAvatar = ({ user, isMobile }) => {
  const classes = useStyles(isMobile);
  return (
    <>
      {user.avatar ?
        <Avatar className={classes.smallAvatar} alt='user avatar' src={user.avatar} /> :
        <Avatar className={classes.smallAvatar} alt='user avatar'>{user.name[0].toUpperCase()}</Avatar>}
    </>
  );
};

export default UserAvatar;
