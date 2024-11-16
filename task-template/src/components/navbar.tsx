import React from 'react';
import { AppBar, Toolbar, Box, Typography, Avatar, IconButton, Badge } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ height: '113px', backgroundColor:'#FAFAFA', color: '#000', boxShadow: 'none', marginTop:'20px'}}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'none' }}>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                        John Smith Profile
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1">
                            HR Manage
                        </Typography>
                        <ChevronRightIcon sx={{ color: '#007bff' }} />
                        <Typography variant="body1">
                            Employees
                        </Typography>
                        <ChevronRightIcon sx={{ color: '#007bff' }} />
                        <Typography variant="body1" sx={{ color: '#003FAD' }}>
                            John Smith Profile
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <IconButton>
                        <Badge badgeContent={1} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <MailIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                    <Avatar 
                        src="https://s3-alpha-sig.figma.com/img/1b73/04b2/85d08c0f8b29f8fc61ad6621680532e7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qMlQZgr223c5Rttg2NygAfSPDQo1VSdWYbx6v5MDZyivz-oa2VEVwEb136BgHQ3RkGuHCS08RZ8svSmqovMVkFomiO~IZlXBxAs7U7OJbMLRENTxcmNHDGP96vT~NOyTd3BXWXndanHdezKY6luPmliPeic~ZHDVnwxEtkVCnLoYQm8dYY9wAbSbBA3LAQ9ndjr96V2HZjLIwdv-W1EMDyuiS6KK7X-bt~e~ByiESHoUKFQoP8jrXaN2kNyZg95h6Txw2yuOX4VjEVYTAoods1wxRVVn3w5Ja3xPAL~M9y8IRj7CtqoypR~yirbYd-yd6bzckCvdP0WCS2CNICEpTA__" 
                        sx={{ width: '45px', height: '45px' }} 
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
