// src/components/pages/LandingPage.js
import React, { useState } from 'react';
import PetCard from '../Pet/PetCard';
import { Button, Container, Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const LandingPage = () => {
  const [pets, setPets] = useState([]); // Initial empty pet list
  const [openDialog, setOpenDialog] = useState(false);
  const [newPet, setNewPet] = useState({ name: '', type: '', breed: '', price: '' });

  const handleAddPetOpen = () => {
    setOpenDialog(true);
  };

  const handleAddPetClose = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet({ ...newPet, [name]: value });
  };

  const handleAddPetSubmit = (e) => {
    e.preventDefault();
    // Add new pet to the list
    setPets([...pets, { ...newPet, id: Date.now() }]); // Adding unique id using timestamp
    handleAddPetClose();
    setNewPet({ name: '', type: '', breed: '', price: '' });
  };

  return (
    <Container>
      <h2>Pets</h2>
      <Button variant="contained" color="primary" onClick={handleAddPetOpen}>
        Add New Pet
      </Button>
      <Grid container spacing={3} style={{ marginTop: 20 }}>
        {pets.length > 0 ? (
          pets.map((pet) => (
            <Grid item xs={12} sm={6} md={4} key={pet.id}>
              <PetCard pet={pet} pets={pets} setPets={setPets} />
            </Grid>
          ))
        ) : (
          <p>No pets added yet.</p>
        )}
      </Grid>

      {/* Add Pet Dialog */}
      <Dialog open={openDialog} onClose={handleAddPetClose}>
        <DialogTitle>Add New Pet</DialogTitle>
        <DialogContent>
          <form onSubmit={handleAddPetSubmit}>
            <TextField
              name="name"
              label="Name"
              value={newPet.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="type"
              label="Type"
              value={newPet.type}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="breed"
              label="Breed"
              value={newPet.breed}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="price"
              label="Price"
              type="number"
              value={newPet.price}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <DialogActions>
              <Button onClick={handleAddPetClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Add Pet
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default LandingPage;
