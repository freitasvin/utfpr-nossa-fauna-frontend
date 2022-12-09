import React from "react"
import { TextField, InputAdornment } from "@mui/material"

export const IconInput = ({ style, icon }) => {
  return (
    <TextField 
      variant='filled'
      label='Pesquisar'
      color='success'
      sx={
        {
          width: '200px',
          ...style
        }
      }
      InputProps={{
        startAdornment: 
        <InputAdornment position="start">
          {icon}
        </InputAdornment>,
      }}
    >
    </TextField>
    
  )
}