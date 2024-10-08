import React from 'react';
import {useResolvedPath} from "react-router";
import cx from "classnames";
import Loader from "../loader";

function ContentLayout({
                           title,
                           breadcrumb,
                           currentCrumb,
                           children,
                           rightAction,
                           loader
                       }) {
    const path = useResolvedPath()
        .pathname
        .split('/')
        .filter(item => item);

    const drawCrumb = (item, index) => {
        if (index === path.length - 1 && currentCrumb) {
            return currentCrumb
        } else return item

    }
    if (loader) {
        return <Loader/>
    }

    return (
        <div className='p-10 overflow-auto flex-1 max-h-[calc(100vh-80px)]'>
            {breadcrumb && <div className='flex items-center gap-2'>
                {path.map((item, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <div className={cx('py-[6px] rounded-[16px]',
                            {'bg-main-black px-3': index === path.length - 1}
                        )}>
                            <p className={cx('font-[500] text-gray-3',
                                {'!text-main': index === path.length - 1})}>{drawCrumb(item, index)}</p>
                        </div>
                        {index !== path.length - 1 &&
                            <span className='text-[20px] text-gray-3'>/</span>}
                    </div>
                ))}
            </div>}
            <div className='flex items-center justify-between'>
                {title && <p className='text-[28px] font-semibold mb-10 mt-2'>{title}</p>}
                {rightAction && rightAction}
            </div>
            <div className=''>
                {children}
            </div>
        </div>
    );
}

export default ContentLayout;
