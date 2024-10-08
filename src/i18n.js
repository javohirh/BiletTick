import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import {store} from '../src/store'

const UZ = store.getState().settings.languages?.uz
const RU = store.getState().settings.languages?.ru
const EN = store.getState().settings.languages?.en
console.log('UZZZZZZZZ', UZ)
console.log('RUUUU', RU)
console.log('ENNNNN', EN)
i18n
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {translation: EN},
            uz: {translation: UZ},
            ru: {translation: RU},
        },
        lng: 'en',
        fallbackLng: 'en',
        detection: {
            order: ['localStorage', 'location'],
            caches: ['localStorage']
        },
        supportedLngs: ['en', 'uz', 'ru'],
        missingKeyHandler: function (lng, ns, key, fallbackValue) {
            console.warn(`Missing translation key: ${key}`);
            // requestPost(APP_LANGUAGES_API, {
            //     data: {
            //         key: key,
            //         uz: key,
            //         ru: key,
            //         en: key
            //     }
            // })
            //     .then(() => {
            //     })
            //     .catch(err => console.warn(err))
        },
        saveMissing: true,
        interpolation: {
            escapeValue: false
        }
    });
export default i18n;
