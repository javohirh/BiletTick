import React from 'react';

const ElementsList = ({items}) => {
    return (
        <div className="w-[292px] flex flex-col gap-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className='w-full bg-[#111] flex items-center justify-center flex-col py-5 rounded-[10px]'>
                    <div className='w-16 h-16 bg-[#2d2d2d] rounded-[4px]'/>
                    <p className='mt-4'>Сиденье</p>

                </div>
            ))}
        </div>
    );
};

export default ElementsList;
