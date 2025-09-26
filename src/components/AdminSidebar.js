import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT LINK
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment'; // New Icon

const AdminSidebar = () => {
  const drawerWidth = 240;
  // 2. UPDATE MENU ITEMS WITH PATHS
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
    { text: 'Manage Members', icon: <PeopleIcon />, path: '/members' },
  ];

  return (
    <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth }}}>
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          // 3. WRAP IN A LINK COMPONENT
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

export default AdminSidebar;