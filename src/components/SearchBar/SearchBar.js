import React from 'react'
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar({ placeholder, handleChange }) {
  return (
    <TextField
      id="outlined-basic"
      placeholder={placeholder}
      variant="standard"
      style={{ width: '100%' }}
      onChange={event => handleChange(event)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}