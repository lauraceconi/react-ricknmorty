import React, { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar({ placeholder, handleChange }) {
  const [value, setValue] = useState("")
  const [debouncedValue, setDebouncedValue] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, 1000)
    return () => clearTimeout(timer);
  }, [value])

  useEffect(() => {
    handleChange(debouncedValue)
  }, [debouncedValue])

  return (
    <TextField
      id="outlined-basic"
      placeholder={placeholder}
      variant="standard"
      style={{ width: '100%' }}
      onChange={event => setValue(event.target.value)}
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