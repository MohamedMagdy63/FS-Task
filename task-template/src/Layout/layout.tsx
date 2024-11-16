import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import AccountCard from '../components/accountCard';

interface LayoutProps {
  children: (selectedCard: 'user' | 'bank') => React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState<'user' | 'bank'>('user');

  const handleCardSelection = (cardType: 'user' | 'bank') => {
    setSelectedCard(cardType);
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#FAFAFA' }}>
      <Sidebar />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Navbar />
        <Box sx={{ display: 'flex', padding: '20px' }}>
          <AccountCard
            name="John Doe"
            title="Software Engineer"
            phone="123-456-7890"
            avatarUrl="https://s3-alpha-sig.figma.com/img/63d8/0b43/0d407624375e50af9a7ca29141e0e8b8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SDj2dzLmOOBE7f5FBLg8etyvAMCUYabpS96mADLqJRShwwkbCcymn-2Ivm-0I5srX3p1pNJ9amP8LK~bir72x-r5Iqsq8E~uL9lO5rzofkVUEEsrw0sYeibTCJMOPS4vJrFnE4DcesuKLOBIxZDH5vEKfgsmMMWCdVmwxAYZDj6rgdE1yUPED57diQhxSbRF3xd0v2KFtsY0GYt5g6YRRY8fTfi4A3krcuiJjNHefjbgP9dYxU-H5y1EA3Aj~bVTtH~KFuEBwQDd1caYHqKUXYAA5GRsvWg-t4V6DCnaTkNg-dL0CmkOacPRbclrutlfhh0HYP4qwODbtub~XbxBmw__"
            onSelect={handleCardSelection}
            selectedCard={selectedCard}
          />
          <Box sx={{ flex: 1, marginLeft: '20px' }}>
            {children(selectedCard)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
