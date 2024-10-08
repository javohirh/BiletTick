import React, {useState} from 'react';
import {Input} from "@material-tailwind/react";
import cx from 'classnames'
import {useField} from "formik";

function FormInput({label,wFull= false,className,withoutForm=false,...props}) {
    const [isFocus,setIsFocus] = useState(false);
    const [field, meta] = useField(!withoutForm?props:null);

    return (
        <div className={cx('w-[380px]',{"w-full":wFull})}>
            {label && <p className='input-label'>
                {label}
            </p>}
            <Input
                {...field}
                {...props}
                value={field?.value?field?.value:''}
                onFocus={()=>setIsFocus(true)}
                onBlur={()=>setIsFocus(false)}
                labelProps={{
                    className: "hidden",
                }}
                containerProps={{ className: "h-[64px]" }}
                className={cx(
                    "!h-[64px] rounded-[12px] bg-main-black text-white px-4 border-[1px] border-[#2d2d2d] outline-none autofill:bg-main-black",
                    className, {
                    "border-[1px] border-gray-3":isFocus,
                    "border-[1px] border-main":meta.touched && meta.error
                })}


            />
            {!withoutForm && meta.touched && meta.error ? (
                <div className="text-[14px] text-main">{meta.error}</div>
            ) : null}

        </div>
    );
}

export default FormInput;
