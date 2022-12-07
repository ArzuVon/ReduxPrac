import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography style={{color: '#40ADA6'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
          <Button style={{color: '#40ADA6'}}>Cart(0)</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
