import React from 'react';
import AboutMe from '../components/AboutMeBox';
import Product from '../components/ProductBox';
import SkillSheet from '../components/SkillSheetBox';
import Box from '@mui/material/Box';


function Home() {
  return (
    <Box sx={{ flex: "1" }}>
        <Box sx={{ display:"center", height: "400px", backgroundColor: "#836BE0", justifyContent: "center", alignItems: "center"}}>
          <Box sx={{textAlign: "center", color: "white" }}>
            <div className="title-font" style={{ fontSize: "70px" }}>Ao-Lab</div>
            <div className="title-font" style={{ fontSize: "36px" }}>Portfolio</div>
          </Box>
        </Box>
        <div id="about-me">
          <AboutMe />
        </div>
        <div id="skill-sheet">
          <SkillSheet/>
        </div>
        <div id="product">
          <Product/>
        </div>
    </Box>
  )
}

export default Home