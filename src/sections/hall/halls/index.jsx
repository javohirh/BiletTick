import React from 'react';
import {useTranslation} from "react-i18next";
import StatusTag from "../../../components/status/StatusTag";
import ContentLayout from "../../../components/content-layout";
import Button from "../../../components/button";
import {Routes} from "../../../constants/routes";
import Table from "../../../components/table";

function HallsScreen() {
    const {t} = useTranslation();
    const content = [
        {header: t('merchant'), key: 'merchant'},
        {header: t('addiction'), key: 'addiction'},
        {header: t('hallName'), key: 'hallName'},
        {header: t('address'), key: 'address'},
        {
            header: t('status'),
            width: 120,
            key: 'status',
            renderCell: () => (
                <StatusTag value='success' variant='active'/>
            )
        },
        {
            header: t('date'),
            key: 'date',
            width: 100,
            renderCell: (row) => <p className='text-main'>{row.date}</p>
        },
    ]

    return (
        <ContentLayout
            title={t('halls')}
            loader={false}
            rightAction={
                <Button link={Routes.CREATE_HALL} className='bg-accent-green'>
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

export default HallsScreen;
