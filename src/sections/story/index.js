import React from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {Routes} from "../../constants/routes";
import Button from "../../components/button";
import Table from "../../components/table";
import ContentLayout from "../../components/content-layout";
import {useGetStoriesListQuery} from "../../services/queries/story/useGetStoriesListQuery";
import StatusTag from "../../components/status/StatusTag";

function StoriesScreen() {
    const {t} = useTranslation();
    const storiesList = useGetStoriesListQuery();
    const list = storiesList.data?.data || []
    const hall= [{
        x:0,
        y:0,
        width:2,
        height:2,
        type:'square',
        col:1,
        row:1
    }]

    const content = [
        {
            header: t('question'),
            key: 'name',
            renderCell: (row) => row.name.ru
        },
        {
            header: t('button'),
            key: 'button',
            renderCell: (row) => row.button.ru
        },
        {
            header: t('hyperlink'),
            key: 'hyperlink',
        },
        {
            header: t('status'),
            key: 'status',
            renderCell: (row) => <StatusTag
                variant={row.showButton ? 'active' : 'inactive'}
                value={row.showButton ? t('active') : t('inactive')}/>
        },

    ]

    return (
        <ContentLayout
            title={t('stories')}
            loader={storiesList.isLoading}
            rightAction={<Link to={Routes.CREATE_STORY}>
                <Button className='bg-accent-green h-[52px]'>{t('add')}</Button>
            </Link>}
        >
            <Table
                withOrder={true}
                content={content}
                list={list}
            />
        </ContentLayout>
    );
}

export default StoriesScreen;
