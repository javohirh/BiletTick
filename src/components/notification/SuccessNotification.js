import React from 'react';
import {toast} from "react-toastify";
function ToastSuccess (message, options) {
  console.log('message----------------',message)
  return toast.success(
      message,
      {
        theme: "colored",
        ...options,
      },
  );
}


export default ToastSuccess;
