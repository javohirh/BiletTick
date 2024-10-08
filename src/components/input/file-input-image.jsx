import React from 'react';
import {ErrorIcon} from "../../assets/icons/error-icon";
import {UnidentifiedIcon} from "../../assets/icons/unidentified-icon";


function FileInputImage({preview, error, loading}) {
    return error ? (
        <ErrorIcon/>
    ) : !loading ? (
        <img
            className='w-full h-full object-cover'
            src={preview}
            alt='Preview'
        />
    ) : (
        <UnidentifiedIcon size={48}/>
    );
}

export default FileInputImage;
