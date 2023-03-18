import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import calculator from './script';

export default function RadioAmount() {
  const [value, setValue] = React.useState('multi');

    const handleChange  = (event) => {
        console.log(event.target.value)
        setValue(event.target.value)
        calculator.setScalewayRadio(event.target.value)
    }
  

    return (
      <FormControl>
       
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="multi"
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
          
        >
          <FormControlLabel value="multi" control={<Radio />} label="Multi" />
          <FormControlLabel value="single" control={<Radio />} label="Single" />
          
        </RadioGroup>
      </FormControl>
    );
  }