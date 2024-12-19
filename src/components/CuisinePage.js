import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box, Grid, Card, CardContent, CardActionArea } from '@mui/material';

const cuisines = [
  'Italian',
  'Mexican',
  'Chinese',
  'Japanese',
  'Indian',
  'Mediterranean',
  'American',
  'Thai'
];

const CuisinePage = () => {
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedCuisine) {
      localStorage.setItem('selectedCuisine', selectedCuisine);
      navigate('/dietary');
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Select Your Preferred Cuisine
        </Typography>
        <Grid container spacing={3}>
          {cuisines.map((cuisine) => (
            <Grid item xs={12} sm={6} md={4} key={cuisine}>
              <Card
                sx={{
                  border: selectedCuisine === cuisine ? '2px solid #1976d2' : 'none',
                }}
              >
                <CardActionArea onClick={() => setSelectedCuisine(cuisine)}>
                  <CardContent>
                    <Typography variant="h6" component="div" align="center">
                      {cuisine}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('/')}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleContinue}
            disabled={!selectedCuisine}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CuisinePage;