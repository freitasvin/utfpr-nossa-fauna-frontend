import React from "react"
import { Button } from "@mui/material"

export const CommonButton = ({ text, style }) => {
  return (
    <Button 
      variant="contained"
      sx={
        {
          backgroundColor: '#78B353',
          width: '200px',
          height: '55px',
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