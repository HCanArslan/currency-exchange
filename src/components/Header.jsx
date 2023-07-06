import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/system';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CustomAppBar position="static">
      <Toolbar sx={{ display: 'flex' }}>
        <Typography variant="h4" component="div" sx={{ color: '#fff' }}>
          Currency Rates
        </Typography>
        <Box sx={{ marginLeft: 'auto' }}>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Sign Up</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button variant="contained" style={{ backgroundColor: '#E48967', marginRight: '8px', color: '#ffffff' }}>Login</Button>
              <Button variant="contained" style={{ backgroundColor: '#E48967', color: '#ffffff' }}>Sign Up</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
