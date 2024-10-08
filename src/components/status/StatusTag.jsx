import React from 'react';

function StatusTag({value,variant}) {

    const color = () =>{
        switch (variant){
            case 'active': return {
                bg:'rgba(15, 157, 88, 0.20)',
                text:'rgba(15, 157, 88, 1)'
            };
            case 'inactive': return {
                bg:'rgba(198, 31, 31, 0.20)',
                text:'rgba(198, 31, 31, 1)',
            };
            case 'warning': return {
                bg:'rgba(224, 161, 0, 0.20)',
                text:'rgba(224, 161, 0, 1)',
            };
            default: return {
                bg:'rgba(224, 161, 0, 0.20)',
                text:'rgba(224, 161, 0, 1)',
            }
        }
    }
    return (
        <div style={{background:color().bg}}
            className='rounded-[40px] h-[32px] w-fit flex items-center justify-center px-5'>
            <p className='font-[500] text-[14px] mt-[-3px]' style={{color:color().text}}>{value}</p>
        </div>
    );
}

export default StatusTag;
