import React from 'react';
import './App.css';
import storageSlider from './script';
import Slider from '@mui/material/Slider';
import calculator from './script';



const StorageSlider = () => {
     const [storage, setStorage] = React.useState(0);

    const handleChange = (event) => {
       setStorage(event.target.value)
       calculator.setStoragePrice(event.target.value)
       }


    

    return (
        <div className='slider' >
        <div className='storage_slider' script={storageSlider}>
            <h3>Storage:</h3>
                <label className="storage_slider_label">
                    <input type="number"  placeholder={storage} className="storage_slider_input" id="input-0" />
                    <span className="storage_span">GB</span>
                </label>
                
        </div>
        <div className='range'><Slider  
                step={1}
                min={0}
                max={1000}
                onChange={handleChange}/>
        </div>
        </div>
    )
}

export default StorageSlider;