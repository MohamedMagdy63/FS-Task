import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Box, IconButton, Typography, Divider, Button } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

interface AccountCardProps {
  name: string;
  title: string;
  phone: string;
  avatarUrl: string;
  onSelect: (selection: 'user' | 'bank') => void;
  selectedCard: 'user' | 'bank';
}

const AccountCard: React.FC<AccountCardProps> = ({ name, title, phone, avatarUrl, onSelect, selectedCard }) => {
    const getButtonStyle = (cardType: 'user' | 'bank') => ({
        padding: '16px',
        backgroundColor: selectedCard === cardType ? '#b3e5fc' : 'transparent',
        textAlign: 'left',
        textTransform: 'none', // Ensures text is not transformed to uppercase
        color: selectedCard === cardType ? '#003FAD' : 'black',
        fontWeight: '500', // Adjust the font weight
        fontSize: '16px',
        justifyContent: 'flex-start', // Align text to the left
        borderRadius: '14px',
        '&:hover': {
          backgroundColor: '#b3e5fc',
          color: '#003FAD',
        },
      });
      

  return (
    <Card sx={{ width: '350px', height: '464px', margin: '16px', boxShadow: 'none', borderRadius: '24px' }}>
      <CardHeader
        avatar={
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '24px' }}>
            <Avatar sx={{ width: '120px', height: '120px', borderRadius: '39px' }} src={avatarUrl} />
            <IconButton sx={{ position: 'absolute', right: -4, bottom: -5, backgroundColor: '#ccc', padding: '4px' }}>
              <CameraAltIcon />
            </IconButton>
          </Box>
        }
      />
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography variant="h6" sx={{ marginTop: '1px' }}>
          {name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'gray' }}>
          {title}
        </Typography>
        <Divider sx={{ marginY: '16px' }} />
        <Box sx={{ marginTop: '16px' }}>
          <Button fullWidth sx={getButtonStyle('user')} onClick={() => onSelect('user')}>
            Personal Information
          </Button>
        </Box>
        <Box sx={{ marginTop: '16px' }}>
          <Button fullWidth sx={getButtonStyle('bank')} onClick={() => onSelect('bank')}>
            Financial Information
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AccountCard;
