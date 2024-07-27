import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; 
// import { setToken } from '../utils/auth'; 
// import api from '../utils/api'; 
//import Login from './Login';
import { addUser } from '../utils/userStorage';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      addUser(email, password); // Store the user credentials
      navigate('/'); 
    } catch (error) {
      console.error(error);
      // Handle error, maybe show an error message
    }
  };

  return (
    <Container>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </form>
      <Typography variant="body2" color="textSecondary" align="center">
        Already have an account?{' '}
        <Link to="/login" style={{ textDecoration: 'none', color: '#3f51b5' }}>
          Login here
        </Link>
      </Typography>
    </Container>
  );
};

export default Signup;