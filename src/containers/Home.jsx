import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar';

const Home = () => {

  return (
    <>
      <Navbar />
      <Container>
        <Typography align='center' color='primary' variant='h1'>
          Hello, World!
        </Typography>
      </Container>
    </>
  );
};

export default Home;
