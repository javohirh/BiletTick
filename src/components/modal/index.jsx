import React, { useEffect, useState } from 'react';
import { AnimatePresence,motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { IconButton } from '@material-tailwind/react';
import { CloseIcon } from '../../assets/icons/close-icon';
import cx from 'classnames';

function ReactPortal({ children }) {
    return createPortal(children, document.body);
}

export const Modal = (props) => {
    const {
        children,
        header,
        footer,
        onHandleChange,
        open= false,
        size,
        isForm,
        exitButton,
        divider=true
    } = props;
    const [zoom, setZoom] = useState(null);

    const sizeType = () => {
        switch (size){
            case 'xs': return '480px'
            case 'sm': return '640px'
            case 'md': return '768px'
            case 'lg': return '1152px'
            case 'xl': return '1440px'
            case 'full': return '100%'
            default: return size ? size : '768px'
        }
    }
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'auto';
            };
        }
    }, []);
    const clickHandler = (e) => {
        if (e.target.classList.contains('glass')) {
            onHandleChange(false);
        }
    };

    return (
        <ReactPortal>
            <AnimatePresence>
                {open ? <motion.div
                    initial={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0
                    }}
                    animate={{
                        transition: { duration: 0.2 },
                    }}
                    className={cx('glass absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center w-full h-[100vh] backdrop-blur z-[100]')}
                    onClick={clickHandler}
                    style={{
                        zoom: `${zoom}%`
                    }}
                >
                    <motion.div
                        initial={{
                            scale: 0.8,
                            y: -100,
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.2 },
                        }}
                        exit={{
                            y: -100,
                            scale: 0.8,
                            opacity: 0,
                        }}
                        className={cx('bg-page-base-01 border border-gray-3 overflow-auto max-h-[100vh] hidden-scrollbar',{
                            'rounded-[16px]':sizeType() !== '100%'
                        })}
                        style={{
                            width: sizeType(),
                            height: sizeType() === '100%' ? '100%' : '',
                        }}
                    >
                        {(header || exitButton) ?
                            <div className={cx('px-6 pt-6 pb-[15px] flex justify-between items-center',{"border-b-[1px] border-border-soft":divider})}>
                                <p className='text-[24px] text-fg-soft font-semibold leading-8'>
                                    {header}
                                </p>
                                {exitButton ? <IconButton size='sm' variant='text' onClick={onHandleChange}>
                                    <CloseIcon />
                                </IconButton> : null}
                            </div> : null
                        }
                        <div className={cx(' hidden-scrollbar overflow-auto', {
                            'p-6': !isForm,
                        })}>
                            {children}
                        </div>
                        {footer ?
                            <div className={cx("p-6",{'border-t-[1px] border-border-soft':divider})}>
                                {footer}
                            </div> : null
                        }
                    </motion.div>
                </motion.div> : null}
            </AnimatePresence>
        </ReactPortal>
    );
}
