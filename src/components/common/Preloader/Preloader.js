import React from 'react';
import preloader from "../../../assets/images/preloader.svg";
import '../../../App.css'

let Preloader = () => {
    return <div className='preloader'>
        <img src={preloader} />
    </div>
}

export default Preloader;
