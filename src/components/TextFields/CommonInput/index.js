import React from "react";
import { TextField, InputAdornment } from "@mui/material";

export const CommonInput = ({ size="small", style }) => {
  return (
    <InputAdornment component={<TextField 
      variant="filled"
      size={size}
      sx={
        {
          ...style
        }
      }
      >
    </TextField>}/>
    
  )
}