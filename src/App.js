import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home';
import CuisinePage from './components/CuisinePage';
import DietaryPage from './components/DietaryPage';
import MealSuggestions from './components/MealSuggestions';
import IngredientList from './components/IngredientList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/cuisine" element={<CuisinePage />} />
        <Route path="/dietary" element={<DietaryPage />} />
        <Route path="/meal-suggestions" element={<MealSuggestions />} />
        <Route path="/ingredients/:mealId" element={<IngredientList />} />
      </Routes>
    </Router>
  );
}

export default App;