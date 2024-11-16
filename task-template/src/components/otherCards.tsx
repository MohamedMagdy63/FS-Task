import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import other from '../data/Others.json';

interface EmergencyContact {
  name: string;
  relationship: string;
  phoneNumber: string;
}

interface AddressDetails {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface LicenseDetails {
  type: string;
  issuingAuthority: string;
  expiryDate: string;
}

interface MilitaryStatus {
  currentStatus: string;
  rank: string;
  branch: string;
}

interface Contacts {
  phoneNumber: string;
  emailAddress: string;
}

interface OtherData {
  contacts: Contacts;
  addressDetails: AddressDetails;
  licenseDetails: LicenseDetails;
  militaryStatus: MilitaryStatus;
  emergencyContacts: EmergencyContact[];
}

const OtherCards: React.FC = () => {
  const [user, setUser] = useState<OtherData | null>(null);

  useEffect(() => {
    const data: OtherData = (other as any).data.otherData;
    setUser(data);
  }, []);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {/* Contact Information */}
      <CardSection title="Contact Information">
        <Grid container spacing={3}>
          <InfoRow label="Phone Number" value={user.contacts.phoneNumber || 'N/A'} />
          <InfoRow label="Email Address" value={user.contacts.emailAddress || 'N/A'} />
        </Grid>
      </CardSection>

      {/* Emergency Contacts */}
      <CardSection title="Emergency Contacts">
        <Grid container spacing={3}>
          {user.emergencyContacts.map((contact, index) => (
            <InfoRow
              key={index}
              label={contact.relationship}
              value={`${contact.name} - ${contact.phoneNumber}`}
            />
          ))}
        </Grid>
      </CardSection>

      {/* Address Details */}
      <CardSection title="Address Details">
        <Grid container spacing={3}>
          <InfoRow label="Street" value={user.addressDetails.street || 'N/A'} />
          <InfoRow label="City" value={user.addressDetails.city || 'N/A'} />
          <InfoRow label="State" value={user.addressDetails.state || 'N/A'} />
          <InfoRow label="Country" value={user.addressDetails.country || 'N/A'} />
          <InfoRow label="Postal Code" value={user.addressDetails.postalCode || 'N/A'} />
        </Grid>
      </CardSection>

      {/* License Details */}
      <CardSection title="License Details">
        <Grid container spacing={3}>
          <InfoRow label="Type" value={user.licenseDetails.type || 'N/A'} />
          <InfoRow label="Issuing Authority" value={user.licenseDetails.issuingAuthority || 'N/A'} />
          <InfoRow label="Expiry Date" value={formatDate(user.licenseDetails.expiryDate)} />
        </Grid>
      </CardSection>

      {/* Military Status */}
      <CardSection title="Military Status">
        <Grid container spacing={3}>
          <InfoRow label="Current Status" value={user.militaryStatus.currentStatus || 'N/A'} />
          <InfoRow label="Rank" value={user.militaryStatus.rank || 'N/A'} />
          <InfoRow label="Branch" value={user.militaryStatus.branch || 'N/A'} />
        </Grid>
      </CardSection>
    </>
  );
};

const CardSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <Box sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '24px', marginTop: '16px' }}>
    <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: '16px' }}>
      <Grid item>
        <Typography sx={{ fontSize: '20px' }}>{title}</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Edit
        </Button>
      </Grid>
    </Grid>
    {children}
  </Box>
);

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <Grid item xs={6}>
    <Typography variant="caption" sx={{ color: 'gray' }}>
      {label}
    </Typography>
    <Typography variant="body1" sx={{ color: 'black' }}>
      {value}
    </Typography>
  </Grid>
);

export default OtherCards;
