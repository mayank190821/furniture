import React from "react";
import { Box } from "@mui/material";
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100vw",
          marginTop: "15px",
          height: "30vh",
          // border: "1px solid red",
          background:"#2e7a66",
          color:"white"
        }}
        
      >
          <address>
              <h3>Address:</h3>
              Kakkar furniture,<br/>
              Sikri, Rajasthan,<br/>
              India<br/>
              pincode: 301524<br/>
          </address>
      </Box>
      <Box
      sx={{
        maxWidth: "100vw",
        height: "7vh",
        background:"#19604d",
        color:"white",
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
      }}
      >
        <i class="fas fa-copyright" style={{marginRight:"8px"}}></i>Kakkar's Furniture  
      </Box>
    </>
  );
}
