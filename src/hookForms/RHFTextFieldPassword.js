import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const RHFTextFieldPassword = ({ name, label, ...other }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { control } = useFormContext() 

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl variant="outlined" style={{ width: '100%' }}>
          <InputLabel htmlFor={`outlined-adornment-${name}`}>{label}</InputLabel>
          <OutlinedInput
            id={`outlined-adornment-${name}`}
            type={showPassword ? 'text' : 'password'}
            {...field}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/*showPassword ? <VisibilityOff/> : <Visibility/>*/}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
      )}
    />
  );
};

export default RHFTextFieldPassword;
