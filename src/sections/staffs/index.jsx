import React from 'react';
import ContentLayout from "../../components/content-layout";
import Table from "../../components/table";
import StatusTag from "../../components/status/StatusTag";
import Button from "../../components/button";
import {Routes} from "../../constants/routes";
import {useTranslation} from "react-i18next";
import {useGetStoriesListQuery} from "../../services/queries/story/useGetStoriesListQuery";
import {useGetStaffsQuery} from "../../services/queries/staffs/useGetStaffsQuery";

function StaffsScreen() {
    const {t} = useTranslation();
    const staffsList = useGetStaffsQuery();

    const content = [
        {header: 'name', key: 'name'},
        {header: 'key', key: 'key'},
        {header: 'value', key: 'value'},
        {header: 'item', key: 'item'},
        {
            header: 'status',
            width: 120,
            key: 'status',
            renderCell: () => (
                <StatusTag value='success' variant='active'/>
            )
        },
        {
            header: 'amount',
            key: 'amount',
            width: 100,
            renderCell: (row) => <p className='text-main'>{row.amount}</p>
        },
    ]
    
    return (
        <ContentLayout
            title={t('staffs')}
            loader={false}
            rightAction={
                <Button link={Routes.CREATE_STAFF} className='bg-accent-green'>
                    {t('create')}
                </Button>}>

            <Table
                withOrder={true}
                content={content}
                list={[]}
            />
        </ContentLayout>
    );
}

export default StaffsScreen;
