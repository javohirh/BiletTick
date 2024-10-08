import DashboardIcon from "../assets/icons/dashboard-icon";
import UserIcon from "../assets/icons/user-icon";
import CategoryIcon from "../assets/icons/category-icon";
import SeanceIcon from "../assets/icons/seance-icon";
import StoryIcon from "../assets/icons/story-icon";
import StaffsIcon from "../assets/icons/staffs-icon";
import SettingsIcon from "../assets/icons/settings-icon";
import SupplierIcon from "../assets/icons/supplier-icon";
import {Routes} from "./routes";

export const navigationList = [
    {
        id: 1,
        path: Routes.HOME,
        title: 'home',
        icon: DashboardIcon
    },
    {
        id: 2,
        path: Routes.USER,
        title: 'users',
        icon: UserIcon
    },
    {
        id: 3,
        path: Routes.CATEGORY,
        title: 'categories',
        icon: CategoryIcon
    },
    {
        id: 4,
        path: Routes.SUPPLIER,
        title: 'suppliers',
        icon: SupplierIcon
    },
    {
        id: 5,
        path: Routes.HALL,
        title: 'hall',
        icon: SupplierIcon,
        child: [
            {
                id: 1,
                path: Routes.HALLS,
                title: 'halls',
            },
            {
                id: 2,
                path: Routes.ELEMENTS,
                title: 'elements',
            },

        ]
    },
    {
        id: 6,
        path: Routes.SEANCE,
        title: 'seances',
        icon: SeanceIcon
    },
    {
        id: 7,
        path: Routes.EVENTS,
        title: 'events',
        icon: SeanceIcon
    },
    {
        id: 8,
        path: Routes.STORY,
        title: 'stories',
        icon: StoryIcon
    },
    {
        id: 9,
        path: Routes.STAFF,
        title: 'staffs',
        icon: StaffsIcon
    },
    {
        id: 10,
        path: Routes.SETTINGS,
        title: 'settings',
        icon: SettingsIcon,
        child: [
            {
                id: 1,
                path: Routes.SETTINGS_FAQ,
                title: 'faq',
            },
            {
                id: 2,
                path: Routes.SETTINGS_DOCUMENTS,
                title: 'documents',
            },
            {
                id: 3,
                path: Routes.APP_LANGUAGES,
                title: 'app_languages',
            },
        ]
    },
]
