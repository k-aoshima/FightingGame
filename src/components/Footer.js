import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Box
        sx={{ 
            height: "60px", 
            width: "100%",
            backgroundColor: "#836BE0",
            color: "white", 
            textAlign: "center",
            bottom: "0",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
        Copyright © Ao-Lab Website 2022
    </Box>
  )
}

export default Footer