import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import calculator from './script';

export default function RadioHardDrive() {
    const [value, setValue] = React.useState('hdd');

    const handleChangeHardDrive  = (event) => {
        console.log(event.target.value)
        setValue(event.target.value)
        calculator.setBunnyRadio(event.target.value)
    }


  

    return (
      <FormControl>
       
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="hdd"
          name="radio-buttons-group"
          value={value}
          onChange={handleChangeHardDrive}
          
        >
          <FormControlLabel value="hdd" control={<Radio />} label="HDD" />
          <FormControlLabel value="ssd" control={<Radio />} label="SSD" />
          
        </RadioGroup>
      </FormControl>
    );
  }