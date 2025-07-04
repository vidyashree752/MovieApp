import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="sidebar">
      <List>
        <ListItem disablePadding>
          <ListItemButton selected={activeTab === 'home'} onClick={() => setActiveTab('home')}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton selected={activeTab === 'mylist'} onClick={() => setActiveTab('mylist')}>
            <ListItemIcon><ListIcon /></ListItemIcon>
            <ListItemText primary="My List" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}