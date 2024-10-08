import React from 'react';
import ContentLayout from "../../../components/content-layout";
import {useTranslation} from "react-i18next";
import Table from "../../../components/table";
import {useGetAppLanguagesQuery} from "../../../services/queries/languages/useGetAppLanguagesQuery";

function AppLanguages() {
    const {t} = useTranslation();
    const languagesList = useGetAppLanguagesQuery()
    const list = languagesList?.data?.data || []

    const content = [
        {
            header: t('key'),
            key: 'key',
        },
        {
            header: t('uz'),
            key: 'uz',
        },
        {
            header: t('ru'),
            key: 'ru',
        },
        {
            header: t('en'),
            key: 'en',
        },

    ]

    return (
        <ContentLayout
            title={t('app_languages')}
            loader={languagesList.isLoading}>
            <Table
                withOrder={true}
                content={content}
                list={list}
            />
        </ContentLayout>
    );
}

export default AppLanguages;
