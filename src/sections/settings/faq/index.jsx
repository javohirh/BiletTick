import React from 'react';
import ContentLayout from "../../../components/content-layout";
import Table from "../../../components/table";
import {Link} from "react-router-dom";
import {Routes} from "../../../constants/routes";
import Button from "../../../components/button";
import {useTranslation} from "react-i18next";
import {useGetFaqsListQuery} from "../../../services/queries/faq/useGetFaqsListQuery";
import moment from "moment";

function FaqScreen() {
    const {t} = useTranslation();
    const faqList = useGetFaqsListQuery()

    const content = [
        {
            header: t('question'),
            key: 'question.ru',
            renderCell: (row) => row.question.uz
        },
        {
            header: t('answer'),
            key: 'answer.ru',
            renderCell: (row) => row.answer.uz
        },
        {
            header: t('created_date'),
            key: 'date',
            renderCell: (row) => moment(row?.createdDate).format('DD.MM.YYYY')
        },

    ]

    return (
        <ContentLayout
            title={t('faq')}
            loader={false}
            rightAction={<Link to={Routes.CREATE_SETTINGS_FAQ}>
                <Button className='bg-accent-green h-[52px]'>{t('add')}</Button>
            </Link>}
        >
            <Table
                withOrder={true}
                content={content}
                list={faqList?.data?.data || []}
            />
        </ContentLayout>
    );
}

export default FaqScreen;
