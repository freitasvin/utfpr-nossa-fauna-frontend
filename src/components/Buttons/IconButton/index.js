import React from "react"
import { IconButton as Button } from "@mui/material"

export const IconButton = ({ children, style }) => {
  return (
    <Button 
      aria-label="delete"
      sx={{
        width: '60px',
        height: '60px',
        ...style
      }}
    >
        {children}
    </Button>
  )
}