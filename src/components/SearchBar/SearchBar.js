import React, { useState, useEffect } from 'react'
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useDidMount from "../../hooks/useDidMount"

export default function SearchBar({ placeholder, handleChange, resetSearch }) {
  const [value, setValue] = useState("")
  const didMount = useDidMount()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (didMount) handleChange(value)
    }, 500)
    return () => clearTimeout(timer);
  }, [value])

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