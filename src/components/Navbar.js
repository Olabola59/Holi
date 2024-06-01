import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'; // Importa el ícono de avión de papel

const CustomAppBar = styled(AppBar)({
  backgroundColor: '#21004D',
});

const Navbar = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <SendOutlinedIcon style={{ marginRight: '8px' }} /> {/* Utiliza el ícono de avión de papel */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Recolectando  Sonrisas
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
