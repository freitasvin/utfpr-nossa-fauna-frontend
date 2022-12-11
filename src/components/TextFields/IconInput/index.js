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
          height: '55px',
          backgroundColor: '#78B353',
          borderRadius: '5px',
          "& label": {
            color: 'white',
            "&.Mui-focused": {
              color: 'white'
            },
          ...style
          }
        }
      }
      InputProps={{
        startAdornment: 
        <InputAdornment 
          position="start"
          sx={{color: 'white'}}
        >
          {icon}
        </InputAdornment>,

        style: {
          color: 'white'
        },
      }}
    >
    </TextField>
    
  )
}