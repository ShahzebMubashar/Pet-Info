// src/components/Pet/PetCard.js
import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const PetCard = ({ pet, setPets, pets }) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editedPet, setEditedPet] = useState(pet);

  const handleEditOpen = () => {
    setOpenEditDialog(true);
  };

  const handleEditClose = () => {
    setOpenEditDialog(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedPet({ ...editedPet, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedPets = pets.map(p => p.id === pet.id ? editedPet : p);
    setPets(updatedPets);
    handleEditClose();
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      const updatedPets = pets.filter(p => p.id !== pet.id);
      setPets(updatedPets);
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5">{pet.name}</Typography>
          <Typography variant="body2">Type: {pet.type}</Typography>
          <Typography variant="body2">Breed: {pet.breed}</Typography>
          <Typography variant="body2">Price: ${pet.price}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleEditOpen} color="primary">Edit</Button>
          <Button onClick={handleDelete} color="secondary">Delete</Button>
        </CardActions>
      </Card>

      {/* Edit Pet Dialog */}
      <Dialog open={openEditDialog} onClose={handleEditClose}>
        <DialogTitle>Edit Pet</DialogTitle>
        <DialogContent>
          <form onSubmit={handleEditSubmit}>
            <TextField
              name="name"
              label="Name"
              value={editedPet.name}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="type"
              label="Type"
              value={editedPet.type}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="breed"
              label="Breed"
              value={editedPet.breed}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="price"
              label="Price"
              type="number"
              value={editedPet.price}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
              required
            />
            <DialogActions>
              <Button onClick={handleEditClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save Changes
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PetCard;
