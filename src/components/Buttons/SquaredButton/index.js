import React from "react"
import { Button } from "@mui/material"

export const SquaredButton = ({ text, style }) => {
  return (
    <Button 
      variant="contained"
      sx={
        {
          border: '1px solid #899E56',
          backgroundColor: '#134720',
          width: '250px',
          ":hover": {
            backgroundColor: '#155436'
        },
          ...style
        }
      }
      >
      {text}
    </Button>
  )
}