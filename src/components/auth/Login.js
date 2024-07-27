import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; 
import { getUser } from '../utils/userStorage'; 
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedPassword = getUser(email);
    if (storedPassword && storedPassword === password) {
      login();
      navigate('/'); 
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
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
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
      <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
        New User?{' '}
        <Link to="/signup" style={{ textDecoration: 'none', color: '#3f51b5' }}>
          Signup here
        </Link>
      </Typography>
    </Container>
  );
};

export default Login;
