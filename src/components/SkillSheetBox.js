import React from 'react'
import Box from '@mui/material/Box';
import SkillData from '../data/skill_data.json'

function SkillSheetBox() {
  
  const SkillItem = ({ skillData }) =>{
    return(
      <Box sx={{ height: "auto", textAlign: "center"}}>
        <img src={`${process.env.PUBLIC_URL}/img/${ skillData.img }`} alt="" style={{ height:"100px", padding: "0"}}></img>
        <Box sx={{ marginTop: "10px", fontWeight: "bold", fontSize: "20px" }}>
          { skillData.title }
        </Box>
        <Box sx= {{ margin: "20px 20px 60px 20px", maxWidth: "400px" }}>
          { skillData.text }
        </Box>
      </Box>
    )
  }

  return (
    <Box sx={{ height: "auto", backgroundColor: "#EBE7FF", padding: "20px 0 50px 0", display:"flex", alignItems: "center", justifyContent:"center", flexDirection: "column"}}>
      <h3 style={{ width: "100%", display: "flex", justifyContent: "center", fontSize: "30px", paddingTop: "30px"}}>
        SKILLSHEET
      </h3>
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent:"center", maxWidth: "1400px"}}>
        <SkillItem 
          skillData={SkillData.cSharp}
        />
        <SkillItem 
          skillData={SkillData.python}
        />
        <SkillItem 
          skillData={SkillData.php}
        />
        <SkillItem 
          skillData={SkillData.flutter}
        />
        <SkillItem 
          skillData={SkillData.unity}
        />
        <SkillItem
         skillData={SkillData.raspberryPi}
        />
      </Box>
    </Box>
    
  )
}

export default SkillSheetBox