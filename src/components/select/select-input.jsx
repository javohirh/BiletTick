import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {AnimatePresence, motion} from 'framer-motion';
import cx from 'classnames';
import {CloseIcon} from '../../assets/icons/close-icon';
import {CheckIcon} from '../../assets/icons/check-icon';
import ArrowDownIcon from "../../assets/icons/arrow-down-icon";
import SearchIcon from "../../assets/icons/search-icon";
import {CircleLoader} from "../loader/circle-loader";
import {translitText} from "../../utils/cyrilicToTranslit";
import './style.css'

export default function SelectInput({
                                        options,
                                        initialValue = null,
                                        placeholder = 'Выбрать',
                                        onChange,
                                        onBlur,
                                        withSearch,
                                        setFieldValue,
                                        name = 'select',
                                        searchPrimaryKey = 'label' || 'propsText',
                                        primaryId = 'value',
                                        className,
                                        error,
                                        label,
                                        clearAction,
                                        disabled,
                                        loading,
                                        onChangeWithoutSelect,
                                        formatOption,
                                        inputProps,
                                        onChangeSearch,
                                        width = 380,
                                        multiselect = false
                                    }) {
    const [handeItem, setHandelItem] = useState(null);
    const [openOptions, setOpenOptions] = useState(false);
    const [positions, setPositions] = useState(null);
    const [optionsList, setOptionsList] = useState([...options]);
    const [multiselectList, setMultiselectList] = useState([])
    const optionRef = useRef(null);
    const inputHead = useRef(null);

    const handleChangeSearchInput = (e) => {
        const ev = translitText(e.target.value).toLowerCase();
        if (onChangeSearch) {
            onChangeSearch(e.target.value);
        } else {

            setOptionsList(() => [...options].filter((item) => {
                let text = '';
                if (Array.isArray(searchPrimaryKey)) {
                    searchPrimaryKey.forEach(i => {
                        text += item[i] + ' ';
                    });
                } else {
                    text = item[searchPrimaryKey];
                }

                return translitText(text).toLowerCase().includes(ev);
            },),);
        }
    };
    const getScrollParent = (node) => {
        if (node == null) {
            return null;
        }

        if (node.scrollHeight > node.clientHeight) {
            return node;
        } else {
            return getScrollParent(node.parentNode);
        }
    }
    const parentNode = getScrollParent(inputHead?.current);

    useEffect(() => {
        if (parentNode) {
            parentNode.addEventListener('scroll', () => {
                const rects = inputHead.current.getBoundingClientRect()
                setPositions(rects)
            })
        }
    }, [parentNode]);


    useEffect(() => {
        if (inputHead.current) {
            const rects = inputHead.current.getBoundingClientRect()
            setPositions(rects)
        }
    }, [
        inputHead,
        inputHead.current?.getBoundingClientRect().left,
        inputHead.current?.getBoundingClientRect().top]);

    useEffect(() => {
        setOptionsList(options);
    }, [options]);

    useEffect(() => {
        if (multiselect) {
            initialValue?.length > 0 && multiselectList?.length == 0 && setMultiselectList(initialValue)
        } else {
            (initialValue?.[primaryId] && !handeItem) && setHandelItem(initialValue);
        }
    }, [initialValue?.[primaryId]]);

    useEffect(() => {
        if (multiselect) {
            if (onChange) onChange(multiselectList); else if (setFieldValue) setFieldValue(name, multiselectList);
        } else {
            if (onChange) onChange(handeItem); else if (setFieldValue) setFieldValue(name, handeItem);
        }
    }, [handeItem, multiselectList]);

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (openOptions && optionRef.current && !optionRef.current?.contains(e.target)) {
                setOpenOptions(false);
                if (onBlur) onBlur()
            }
        };
        document.addEventListener('mousedown', checkIfClickedOutside);
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [openOptions]);

    return (<div
        onScroll={() => {
            const rects = inputHead.current.getBoundingClientRect()
            setPositions(rects)
        }}
        onScrollCapture={() => {
            const rects = inputHead.current.getBoundingClientRect()
            setPositions(rects)
        }}
        className='w-full'
        style={{
            maxWidth: `${width}px`,
        }}
    >
        {label && <span className='input-label'>{label}</span>}
        <div
            ref={inputHead}
            className={cx('select-input-wrapper', className, {
                'border-gray-3': openOptions, '!border-red-500': error, 'select-input-disable': disabled,
            })}
        >
            {openOptions && withSearch ? (<div className='select-container'>
                        <span className='search-icon-wrapper'>
                          <SearchIcon/>
                        </span>
                <input
                    onChange={handleChangeSearchInput}
                    autoFocus={true}
                    placeholder='Поиск'
                    className='input-body'
                />
            </div>) : (<div
                onClick={() => !loading && setOpenOptions(!openOptions)}
                className={cx('without-search-wrapper', {
                    'cursor-not-allowed': loading,
                })}
            >
                {(!loading && inputProps) && <span className='left-icon-wrapper'>
                                <inputProps.leftIcon/>
                            </span>}
                {loading && (<CircleLoader color='green' className='h-6 w-6'/>)}
                {formatOption && <div
                    className={cx('flex-1 text-fg', {"format-option-wrapper": multiselect})}>
                    {((multiselectList.length > 0 && multiselect ? multiselectList.map((item) => formatOption(item)) : handeItem && formatOption(handeItem)) || (loading ? "Загрузка..." : placeholder))}
                </div>}{!formatOption && <p className={cx('text-input-label text-md/[16px] font-[400] flex-1', {
                '!text-fg-disabled': disabled,
                "whitespace-nowrap w-fit overflow-ellipsis overflow-hidden": multiselect
            })}>
                {multiselect && multiselectList.length == 0 ? placeholder : multiselectList && multiselectList.length > 0 ? multiselectList.map((item) => item?.label).join(", ") : (handeItem && handeItem?.label) || placeholder}
            </p>}
                {clearAction && (handeItem || multiselectList.length > 0) && (multiselectList.length > 0 || handeItem[primaryId]) &&
                    <div
                        onClick={(e) => {
                            setHandelItem(null);
                            setMultiselectList([])
                            e.stopPropagation();
                        }}>
                        <CloseIcon/>
                    </div>}
                <div className={cx({'rotate-180': openOptions})}>
                    <ArrowDownIcon color='#fff'/>
                </div>
            </div>)}

            <AnimatePresence>
                {(openOptions && positions) && (<ReactPortal>
                    <motion.div
                        ref={optionRef}
                        initial={{
                            y: 20, opacity: 0,
                        }}
                        animate={{
                            y: 0, opacity: 1,
                        }}
                        exit={{
                            y: 20, opacity: 0,
                        }}
                        style={{
                            width: positions?.width + 'px',
                            top: positions?.y + positions?.height + 5 + 'px',
                            left: positions?.x + 'px', // zoom: `${zoom}%`
                        }}

                        className='hidden-scrollbar p-2 absolute border-[#2d2d2d]  bg-main-black flex flex-col gap-[2px]
                                            top-[110%] rounded-[8px] overflow-y-auto overflow-hidden max-h-[200px] z-50 border'
                    >
                        {(optionsList && optionsList.length) ? optionsList.map((item, index) => {
                            let active = item[primaryId] === (handeItem && handeItem[primaryId])
                            if (multiselect && multiselectList.length > 0) {
                                active = multiselectList?.findIndex((elem) => elem[primaryId] == item[primaryId]) >= 0
                            }
                            return (<div
                                key={index}
                                onClick={() => {
                                    if (multiselect) {
                                        if (onChangeWithoutSelect) onChangeWithoutSelect(item); else {
                                            const isHas = multiselectList
                                                .find((elem) => elem[primaryId] === item[primaryId])
                                            if (isHas) {
                                                setMultiselectList((prev) => prev.filter((el) => el[primaryId] !== isHas[primaryId]))
                                            } else {
                                                setMultiselectList((prev) => [...prev, item])
                                            }
                                        }
                                    } else {
                                        if (onChangeWithoutSelect) onChangeWithoutSelect(item); else setHandelItem(item);
                                        setOpenOptions(false);
                                    }
                                }}
                                className={cx('w-full flex items-center  gap-[8px] rounded-[6px] px-[14px] py-[10px] hover:bg-black', {
                                    'bg-surface-hover01': active, "justify-between": multiselect
                                })}
                            >
                                {formatOption && formatOption(item)}
                                {!formatOption && <div className={'flex items-center w-4/5'}>
                                    {item?.propsText &&
                                        <p className='text-fg mr-4 font-[400] flex-1 text-md/[16px]'>
                                            {item?.propsText} -
                                        </p>}
                                    <p className='text-input-label font-[400] flex-1 text-md/[16px]'>
                                        {item?.label}
                                    </p>
                                </div>}
                                {active && multiselect && <CheckIcon/>}
                            </div>)
                        }) : (<div className='flex text-input-label justify-center'>Empty</div>)}
                    </motion.div>
                </ReactPortal>)}
            </AnimatePresence>
        </div>
        {error && (<p className="text-red-700 text-[14px]">{error}</p>)}
    </div>);
}

const ReactPortal = ({children}) => {
    return ReactDOM.createPortal(children, document.body)
}

