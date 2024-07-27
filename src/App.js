import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import LandingPage from './components/pages/LandingPage';
import AddPet from './components/Pet/AddPet';
import EditPet from './components/Pet/EditPet';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<ProtectedRoute element={<LandingPage />} />} />
        <Route path="/add-pet" element={<ProtectedRoute element={<AddPet />} />} />
        <Route path="/edit-pet/:id" element={<ProtectedRoute element={<EditPet />} />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
