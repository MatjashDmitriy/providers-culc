import './App.css';
import StorageSlider from './storage_slider';
import TransferSlider from './transfer_slider';
import calculator from './script';
import React from 'react';
import RadioHardDrive from './hard_drive';
import RadioAmount from './amount';
import Slider from '@mui/material/Slider';


function App() {
    const [backblazePrice, setBackblazePrice] = React.useState(0);

    calculator.setProviderpriceChange('backblaze', setBackblazePrice)

    const [bunnyPrice, setBunnyPrice] = React.useState(0);

    calculator.setProviderpriceChange('bunny', setBunnyPrice)

    const [scalewayPrice, setScalewayPrice] = React.useState(0);

    calculator.setProviderpriceChange('scaleway', setScalewayPrice)

    const [vultrPrice, setVultrPrice] = React.useState(0);

    calculator.setProviderpriceChange('vultr', setVultrPrice)


  return (
    
        <div className='app'>
            <div className='sliders'>

                    <StorageSlider/>
                
                    <TransferSlider/>
            </div>



            <div className="calculate_block">
            <div className="providers">
                <div className="provider">
                    <h4>backblaze</h4>
                    <img src="./1.jpg" alt='img'  width="40px" height="40px"/>
                </div>

                <div className="provider">
                    <div className='provider_bunny'>
                        <h4>bunny</h4>
                        <RadioHardDrive/>
                      
                         <img src="./2.svg" alt='img' width="40px" height="40px"/>
                    </div>
                   

                </div>

                <div className="provider">
                    
                    <div className='provider_scaleway'>
                        <h4>scaleway</h4>
                        <RadioAmount/>
                        
                        <img src="./3.png" alt='img' width="40px" height="40px"/>
                    </div>
                    
                </div>

                <div className="provider">
                    <h4>vultr</h4>
                    <img src="./4.png"  alt='img' width="40px" height="40px"/>
                </div>
            </div>
            
            <div className="charts">
                <div className="chart"><Slider value={backblazePrice} max={74} color="secondary"/></div>
                <div className="chart"><Slider value={bunnyPrice} max={74} color="secondary"/></div>
                <div className="chart"><Slider value={scalewayPrice} max={74} color="secondary"/></div>
                <div className="chart"><Slider value={vultrPrice} max={74} color="secondary"/></div>

            </div>

            <div className="prices">
                <div className="price">
                    <h5>{backblazePrice}$</h5>
                </div>
                <div className="price">
                    <h5>{bunnyPrice} $</h5>
                </div>
                <div className="price">
                    <h5>{scalewayPrice}$</h5>
                </div>
                <div className="price">
                    <h5>{vultrPrice} $</h5>
                </div>
            </div>
        </div>
        </div>
   
  );
}

export default App;

