import React from 'react';
import {Outlet} from 'react-router-dom'
import Sidebar from "./Sidebar";
import {useTranslation} from "react-i18next";

function Root() {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    console.log('dsdssdsds', currentLanguage)

    return (
        <div className='flex'>
            <Sidebar/>
            <div className='flex-1'>
                <nav className='w-full h-[80px] bg-main-black flex items-center justify-end px-8 gap-4'>
                    <div onClick={() => i18n.changeLanguage('en')}>
                        {t("en")}
                    </div>
                    <div onClick={() => i18n.changeLanguage('ru')}>
                        ru
                    </div>
                    <div onClick={() => i18n.changeLanguage('uz')}>
                        uz
                    </div>
                    <div onClick={() => i18n.changeLanguage('uz')}>
                        {t('home')}
                    </div>

                </nav>
                <div>
                    <Outlet/>
                </div>

            </div>
        </div>
    );
}

export default Root;
