import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import './style.css'
import cx from "classnames";
import {useSearchParams} from "react-router-dom";

function Tab({tabs=[],tabName='tab'}) {
    let [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get(tabName)

    useEffect(()=>{
        if (!currentTab){
            setSearchParams({[tabName]:tabs[0].value})
        }
    },[currentTab])

    return (
        <AnimatePresence>
            <ul className='tab-wrapper'>
                {tabs.map((item) => (
                    <li
                        key={item.label}
                        className={cx('tab-item',{'text-main':currentTab === item.value})}
                        onClick={() => setSearchParams({[tabName]:item.value})}
                    >
                        <p className='text'>{item.label}</p>
                        {currentTab === item.value ? (
                            <motion.div className="underline" layoutId="underline" />
                        ) : null}
                    </li>
                ))}
            </ul>
        </AnimatePresence>
    );
}

export default Tab;
