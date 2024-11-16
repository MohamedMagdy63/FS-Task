import React from 'react';
import { Box, IconButton, Avatar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import GroupIcon from '@mui/icons-material/Group';
import InboxIcon from '@mui/icons-material/Inbox';

const Sidebar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '108px',
                backgroundColor: '#ffffff',
                height: '100vh',
                borderRight: '1px solid #E7EAEE',
                paddingTop: '20px',
                alignItems: 'center',
                gap: '24px',
            }}
        >
            <Avatar
                src="https://s3-alpha-sig.figma.com/img/d9e6/e922/7c094aee274109e856c12cec5e15c87e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RzrKcdlqA5SReVrndyhyzXTJkj9oc5KPH4ZdxKlhGvy~j0rUMY9m-AzFm5cet4Ts4LTCQqSx1QP7clVyEGLqsHIGgQ3YNwlPXyFc3V4OVYEmyfw6GUUwU2Dz0H-VAvaaIVvGPoeMjTJGcJWWkm10F~dEyoQ0daTl5RaoUqbyz5CAhgw1cUiiHhblNBFSasWxjFCBVPx-OhkdZXdwO7vFw-A1kMrijQKwHaVR0HZT42qkwP8YsCQ7AsAelzDXAl2sjh~dAothcre2s6QArH8dOoGieuFGhNIHArA6fnpNWMAot0ngo0AiQZlIZLJ8fZqyf9Hy5sRNKkM9uVCx-yjFCg__"
                sx={{ width: '45px', height: '45px', borderRadius: '0' }}
            />
            <IconButton
                sx={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#007bff', // Fixed blue background for dashboard
                    color: '#fff',
                    '&:hover': { backgroundColor: '#0056b3', color: '#fff' }
                }}
            >
                <DashboardIcon sx={{ width: '24px', height: '24px', color: '#fff' }} />
            </IconButton>
            <IconButton
                sx={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#fff',
                    color: 'gray',
                    '&:hover': { backgroundColor: '#007bff', '& .MuiSvgIcon-root': { color: '#fff' } }
                }}
            >
                <SearchIcon sx={{ width: '24px', height: '24px', color: 'gray' }} />
            </IconButton>
            <IconButton
                sx={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#fff',
                    color: 'gray',
                    '&:hover': { backgroundColor: '#007bff', '& .MuiSvgIcon-root': { color: '#fff' } }
                }}
            >
                <CreditCardIcon sx={{ width: '24px', height: '24px', color: 'gray' }} />
            </IconButton>
            <IconButton
                sx={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#fff',
                    color: 'gray',
                    '&:hover': { backgroundColor: '#007bff', '& .MuiSvgIcon-root': { color: '#fff' } }
                }}
            >
                <GroupIcon sx={{ width: '24px', height: '24px', color: 'gray' }} />
            </IconButton>
            <IconButton
                sx={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#fff',
                    color: 'gray',
                    '&:hover': { backgroundColor: '#007bff', '& .MuiSvgIcon-root': { color: '#fff' } }
                }}
            >
                <InboxIcon sx={{ width: '24px', height: '24px', color: 'gray' }} />
            </IconButton>
        </Box>
    );
}

export default Sidebar;
