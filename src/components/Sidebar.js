import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person'; // <-- 1. IMPORT THE NEW ICON
import { Link } from 'react-router-dom';

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawerWidth = 240;

  // 2. ADD THE NEW "MY PROFILE" ITEM TO THE MENU
  const menuItems = [
    { text: 'Dashboard', icon: <AccountBalanceWalletIcon />, path: '/' },
    { text: 'My Profile', icon: <PersonIcon />, path: '/profile' },
    { text: 'Apply for Loan', icon: <RequestQuoteIcon />, path: '/apply-loan' },
    { text: 'Transaction History', icon: <HistoryIcon />, path: '/history' },
  ];

  const drawerContent = (
    <div>
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} component={Link} to={item.path} disablePadding sx={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
      >
        {drawerContent}
      </Drawer>
      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
