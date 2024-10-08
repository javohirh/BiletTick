import React from 'react';
import './index.css'

function Loader() {
    return (
        <div className='loader-wrapper'>
            <div className="loader">
                <div className="shadow"></div>
                <div className="box">️</div>
            </div>
        </div>
    );
}

export default Loader;
