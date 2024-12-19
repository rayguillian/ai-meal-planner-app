import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';
import { auth } from '../firebase';

const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Meal Planner AI
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Get personalized meal suggestions based on your preferences
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/cuisine')}
          sx={{ mt: 4 }}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSignOut}
          sx={{ mt: 2 }}
        >
          Sign Out
        </Button>
      </Box>
    </Container>
  );
};

export default Home;