import React from "react";
import { Button } from "@mui/material";

export const CommonButton = ({ text, size="large", style, startIcon }) => {
  return (
    <Button 
      variant="contained"
      size={size}
      startIcon={startIcon}
      sx={
        {
          backgroundColor: '#78B353',
          width: '200px',
          ":hover": {
            backgroundColor: '#78B353'
        },
          ...style
        }
      }
      >
      {text}
    </Button>
  )
}