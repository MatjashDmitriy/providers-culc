import React from 'react';
import './App.css';
import Slider from '@mui/material/Slider';
import calculator from './script';

const TransferSlider = () => {
    const [storage, setStorage] = React.useState(0);

    const handleChange = (event) => {
       setStorage(event.target.value)
       calculator.setTransferPrice(event.target.value)
       }


    return (
        
        <div>
        <div className="transfer_slider">
            <h3>Transfer:</h3>
                <label className="transfer_slider_label">
                    <input type="number"  placeholder={storage} className="transfer_slider_input" id="input-1" />
                    <span className="transfer_span">GB</span>
                </label>
               
        </div>
        <div className='range' ><Slider
            step={1}
            min={0}
            max={1000}
            onChange={handleChange}
        /></div>
        </div>
    )
}

export default TransferSlider;