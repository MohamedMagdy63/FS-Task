import React, { useState, useEffect } from 'react';
import userJson from '../data/User.json';
import { Typography } from '@mui/material';
import Layout from '../Layout/layout';
import UserData from '../components/userData';
import OtherCards from '../components/otherCards';
import BankCard from '../components/bankCard';

const MainProfile: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Directly set user data from the imported JSON
    setUserData(userJson);
  }, []);

  if (!userData) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Layout>
      {(selectedCard: 'user' | 'bank') => (
        <>
          {selectedCard === 'user' ? (
            <> 
              <UserData userData={userData} /> {/* Pass the userData prop */}
              <OtherCards />
            </>
          ) : (
            <BankCard />
          )}
        </>
      )}
    </Layout>
  );
};

export default MainProfile;
