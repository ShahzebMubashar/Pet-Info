import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Container } from '@mui/material';
import api from '../utils/api';

const EditPet = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await api.get(`/pets/${id}`);
        setPet(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPet();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/pets/${id}`, pet);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  if (!pet) return <p>Loading...</p>;

  return (
    <Container>
      <h2>Edit Pet</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={pet.name}
          onChange={(e) => setPet({ ...pet, name: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Type"
          value={pet.type}
          onChange={(e) => setPet({ ...pet, type: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Breed"
          value={pet.breed}
          onChange={(e) => setPet({ ...pet, breed: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Price"
          type="number"
          value={pet.price}
          onChange={(e) => setPet({ ...pet, price: e.target.value })}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Update Pet
        </Button>
      </form>
    </Container>
  );
};

export default EditPet;
