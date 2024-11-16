import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import bankDataJson from '../data/BankData.json';

interface BankData {
  IBAN: string;
  bankName: string;
}

interface BankCardProps {
  data?: BankData;
}

// Manually ensuring the structure of bankData
const bankData: BankData = {
  IBAN: bankDataJson.bankData.IBAN,
  bankName: bankDataJson.bankData.bankName,
};

const BankCard: React.FC<BankCardProps> = ({ data = bankData }) => {
  const { IBAN = 'N/A', bankName = 'N/A' } = data;

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '24px', marginTop: '16px' }}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: '16px' }}>
        <Grid item>
          <Typography sx={{ fontSize: '20px' }}>Bank Details</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Edit
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="caption" sx={{ color: 'gray' }}>IBAN</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>{IBAN}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption" sx={{ color: 'gray' }}>Bank Name</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>{bankName}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BankCard;
