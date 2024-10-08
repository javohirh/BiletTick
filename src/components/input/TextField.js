import React, {useState} from 'react';
import {Input} from "@material-tailwind/react";
import cx from 'classnames'

function TextField({label,wFull= false,withoutForm=false,className,...props}) {
    const [isFocus,setIsFocus] = useState(false);

    return (
        <div className={cx('w-[380px]',{"w-full":wFull})}>
            {label && <p className='text-[16px] font-[400] mb-[6px] text-text-gray'>
                {label}
            </p>}
            <Input
                {...props}
                onFocus={()=>setIsFocus(true)}
                onBlur={()=>setIsFocus(false)}
                labelProps={{
                    className: "hidden",
                }}
                containerProps={{ className: "h-[48px]" }}
                className={cx(
                    "!h-[48px] rounded-[12px] bg-main-black text-white px-4 border-[1px] border-[#2d2d2d] outline-none autofill:bg-main-black",
                    className, {
                        "border-[1px] border-gray-3":isFocus,
                    })}


            />
        </div>
    );
}

export default TextField;
