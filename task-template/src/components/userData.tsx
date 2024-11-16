import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Box, Grid, Typography, Button, TextField } from '@mui/material';
import { GET_USER_DATA, UPDATE_USER } from '../data/GQL-data';

interface User {
  id: string;
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  nationalId: { idNumber: string; expiryDate: string };
  localizedName: { firstName: string; fatherName: string; grandfatherName: string; familyName: string };
  nationalities: { country: { id: string; name: string } }[];
}

interface UserDataProps {
  userData: { data: { user: User } };
}

const UserData: React.FC<UserDataProps> = () => {
  const { loading, error, data, refetch } = useQuery(GET_USER_DATA);
  const [updateUser] = useMutation(UPDATE_USER, {
    onCompleted: () => {
      refetch(); // Refresh the data after successful update
    },
    onError: (error) => {
      console.error('Error updating user:', error);
      // Handle error appropriately (e.g., show error message to user)
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    fatherName: '',
    grandfatherName: '',
    familyName: ''
  });

  // Save original data for comparison
  const [originalData, setOriginalData] = useState({});

  useEffect(() => {
    if (data?.getUser) {
      const userData = {
        id: data.getUser.id,
        firstName: data.getUser.firstName,
        fatherName: data.getUser.fatherName,
        grandfatherName: data.getUser.grandfatherName,
        familyName: data.getUser.familyName
      };
      setFormData(userData);
      setOriginalData(userData);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create JSON payload of changes
    const changes = Object.entries(formData).reduce((acc: any, [key, value]) => {
      if (value !== (originalData as any)[key]) {
        acc[key] = value;
      }
      return acc;
    }, {});

    // Only send update if there are actual changes
    if (Object.keys(changes).length > 0) {
      try {
        await updateUser({
          variables: {
            ...formData // Send all form data as required by the mutation
          }
        });
        setIsEditing(false);
        setOriginalData(formData); // Update original data after successful save
      } catch (error) {
        console.error('Failed to update user:', error);
        // Handle error appropriately (e.g., show error message to user)
      }
    } else {
      setIsEditing(false); // No changes to save
    }
  };

  const handleCancel = () => {
    setFormData(originalData as any); // Reset form to original data
    setIsEditing(false);
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '24px' }}>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Father Name"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Grandfather Name"
                name="grandfatherName"
                value={formData.grandfatherName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Family Name"
                name="familyName"
                value={formData.familyName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Box sx={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </form>
      ) : (
        <>
          <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: '16px' }}>
            <Grid item>
              <Typography sx={{ fontSize: '20px' }}>Basic Information</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={() => setIsEditing(true)}>
                Edit
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Typography variant="caption" sx={{ color: 'gray' }}>First Name</Typography>
              <Typography variant="body1" sx={{ color: 'black' }}>{formData.firstName}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="caption" sx={{ color: 'gray' }}>Father Name</Typography>
              <Typography variant="body1" sx={{ color: 'black' }}>{formData.fatherName}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="caption" sx={{ color: 'gray' }}>Grandfather Name</Typography>
              <Typography variant="body1" sx={{ color: 'black' }}>{formData.grandfatherName}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="caption" sx={{ color: 'gray' }}>Family Name</Typography>
              <Typography variant="body1" sx={{ color: 'black' }}>{formData.familyName}</Typography>
            </Grid>
            
          </Grid>
        </>
      )}
    </Box>
  );
};

export default UserData;