import React from 'react'
import Box from '@mui/material/Box';
import ProductItem from './ProductItem';
import ProductData from "../data/product_data.json";

function ProductBox() {

  const nextStationSearchData = ProductData['next-station'];
  const switchBotManagerData = ProductData['switch-bot'];
  const fightingGameData = ProductData['fighting-game'];

  return (
    <Box sx={{ height: "100%", marginTop: "30px", display:"flex", alignItems: "center", justifyContent:"center", flexDirection: "column"}}>
      <h3 style={{ width: "100%", display: "flex", justifyContent: "center", fontSize: "30px", margin: "0px"}}>
        PRODUCT
      </h3>
      <Box sx={{ margin: "30px 0 90px 0", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent:"center" }}>
        <Box sx={{ padding: "20px" }}>
          <ProductItem data={nextStationSearchData}/>
        </Box>
        <Box sx={{ padding: "20px" }}>
          <ProductItem data={switchBotManagerData}/>
        </Box>
        <Box sx={{ padding: "20px" }}>
          <ProductItem data={fightingGameData}/>
        </Box>
      </Box>
      
    </Box>
  )
}

export default ProductBox