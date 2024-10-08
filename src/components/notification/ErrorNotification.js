import React from 'react';
import { toast } from 'react-toastify';

function ToastError (message, options) {
    console.log('message----------------',message)
    return toast.error(
        message,
        {
            theme: "colored",
            ...options,
        },
    );
}


export default ToastError;
