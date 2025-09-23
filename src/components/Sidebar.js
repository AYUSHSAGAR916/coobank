import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT LINK

const Sidebar = () => {
  const drawerWidth = 240;

  // 2. UPDATE MENU ITEMS WITH PATHS
  const menuItems = [
    { text: 'Dashboard', icon: <AccountBalanceWalletIcon />, path: '/' },
    { text: 'Apply for Loan', icon: <RequestQuoteIcon />, path: '/apply-loan' },
    { text: 'Transaction History', icon: <HistoryIcon />, path: '/history' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          // 3. WRAP LIST ITEM IN A LINK
          <ListItem key={item.text} component={Link} to={item.path} disablePadding sx={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;