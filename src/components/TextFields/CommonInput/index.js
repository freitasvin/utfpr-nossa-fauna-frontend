import React from "react"
import { TextField, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'

export const CommonInput = ({ style }) => {
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
          <SearchIcon fontSize='medium'/>
        </InputAdornment>,
      }}
    >
    </TextField>
    
  )
}