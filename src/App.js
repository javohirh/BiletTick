import React, {useEffect} from "react";
import AppLayout from "./layout";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {getAllLanguages} from "./store/slices/settingsSlice";

function App() {
    const dispatch = useDispatch();
    const {i18n} = useTranslation()
    const languages = useSelector(store => store.settings.languages)
    console.log('ssssssssss', languages)

    useEffect(() => {
        dispatch(getAllLanguages({
            en: {
                home: 'HOME1',
                name_uz: 'UZBEK'
            },
            uz: {
                home: 'UY1',
                name_uz: "O'zbek"
            },
            ru: {
                home: 'Dom1',
                name_uz: 'Uzbek'
            },
        }))
        // Object.keys(languages).forEach((lng) => {
        //     i18n.addResourceBundle(lng, 'translation', languages[lng], true, true);
        // });
        // i18n.addResourceBundle('uz', 'translation', JSON.stringify(languages.uz), true, true)
        // i18n.addResourceBundle('ru', 'translation', JSON.stringify(languages.ru), true, true)
        // i18n.addResourceBundle('en', 'translation', JSON.stringify(languages.en, true, true)
    }, [])

    return (
        <div className="bg-black">
            <div className='absolute'>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}

                    hideProgressBar={true}
                    newestOnTop={false}
                    draggable={false}
                    closeOnClick
                    pauseOnHover
                    toastClassName="custom-toast"
                />
            </div>
            <QueryClientProvider client={new QueryClient()}>
                <ReactQueryDevtools initialIsOpen={false}/>
                <AppLayout/>
            </QueryClientProvider>
        </div>
    );
}

export default App;
