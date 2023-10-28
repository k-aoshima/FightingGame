import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, position: "fixed", width:"100%"}}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#212529"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ao-Lab
          </Typography>
          <AnchorLink href="#about-me" offset="100" style={{ paddingRight: " 30px", color: "white", textDecoration:"none"}}>
            ABOUTME
          </AnchorLink>
          <AnchorLink href="#skill-sheet" style={{ paddingRight: " 30px", color: "white", textDecoration:"none"}}>
            SKILLSHEET
          </AnchorLink>
          <AnchorLink href="#product" offset="80" style={{ color: "white", textDecoration:"none"}}>
            PRODUCT
          </AnchorLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;