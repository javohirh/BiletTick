import React, {useState} from 'react';
import StatusTag from "../status/StatusTag";
import {useTranslation} from "react-i18next";


function CategoryCard({img, title = 'Title', status}) {
    const {t} = useTranslation();
    const [errorIcon, setErrorIcon] = useState(false);
    return (
        <div className='rounded-[12px] bg-[#111] p-3 flex gap-10 items-center justify-between'>
            <div className='flex items-center gap-4'>
                <div className='w-16 h-16 rounded-[50%] bg-[#1d1d1d] flex items-center justify-center'>
                    {!errorIcon && img &&
                        <img
                            src={img}
                            onError={() => setErrorIcon(true)}
                            alt={title}
                            className='w-8 h-8 object-cover'/>
                    }
                </div>
                <p>{title}</p>
            </div>
            <StatusTag variant={status ? 'active' : 'inactive'} value={status ? t('active') : t('inactive')}/>

        </div>
    );
}

export default CategoryCard;
