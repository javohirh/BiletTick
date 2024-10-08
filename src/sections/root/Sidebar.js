import React from 'react';
import {ReactComponent as Logo} from "../../assets/logo.svg";
import {navigationList} from "../../constants/routeConstants";
import {Link} from "react-router-dom";
import cx from "classnames";
import {useNavigate, useResolvedPath} from "react-router";
import {IoIosArrowDown} from "react-icons/io";
import {useTranslation} from "react-i18next";

function Sidebar() {
    const path = useResolvedPath().pathname;
    const {t} = useTranslation();
    const navigation = useNavigate();
    const active = (url) => {
        if (url === '/' && !path.split('/')[1]) {
            return true
        }
        return url !== '/' ? path.includes(url) : false
    }
    return (
        <div className='w-[260px] h-[100vh] bg-main-black py-[22px]'>
            <div className='px-[28px]' onClick={() => navigation('/')}>
                <Logo width={200}/>
            </div>
            <div className='flex-1 flex items-start flex-col mt-5 gap-2'>
                {navigationList.map(item => (
                    <Link
                        key={item.id}
                        to={item?.child ? item.child[0].path : item.path}
                        className='w-full relative'>
                        <div
                            className={cx('flex items-center justify-between pl-8 pr-2 py-3 cursor-pointer hover:bg-black w-full transition',
                                {'bg-black text-main': active(item.path)})}>
                            <div className='flex items-center gap-4'>
                                <item.icon color={active(item.path) ? '#C61F1F' : '#A1A1A1'}/>
                                <p className='text-[16px] font-semibold'>
                                    {t(item.title)}
                                </p>
                            </div>

                            {item?.child &&
                                <span style={{
                                    transform: active(item.path) ? 'rotate(180deg)' : null,
                                    transition: 'ease-in'
                                }}>
                                <IoIosArrowDown size={22}/>
                            </span>
                            }
                        </div>
                        {item?.child && active(item.path) && <div className='mt-1 ml-8 flex flex-col gap-1 '>
                            {
                                item.child.map(child => (
                                    <Link key={child.id} to={child.path}>
                                        <div
                                            className={cx('flex items-center gap-4 pl-5 pr-2 py-3 cursor-pointer hover:bg-black w-full transition rounded-tl-[12px] rounded-bl-[12px]',
                                                {'bg-black': active(child.path)})}
                                        >
                                            <p className={cx('text-[16px] font-semibold',
                                                {'text-main': active(child.path)})}>
                                                {t(child.title)}
                                            </p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        }
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
