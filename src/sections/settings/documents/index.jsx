import React from 'react';
import ContentLayout from "../../../components/content-layout";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {Routes} from "../../../constants/routes";
import Button from "../../../components/button";
import CategoryCard from "../../../components/cards/CategoryCard";
import {useGetAllDocumentsQuery} from "../../../services/queries/documents/useGetAllDocumentsQuery";

function DocumentsScreen(props) {
    const {t} = useTranslation();
    const documents = useGetAllDocumentsQuery()
    const list = documents.data?.data || []

    return (
        <ContentLayout
            title={t('documents')}
            breadcrumb={true}
            loader={documents.isLoading}
            rightAction={<Link to={Routes.ADD_DOCUMENTS}>
                <Button className='bg-accent-green h-[52px]'>{t('add')}</Button>
            </Link>}
        >
            <div className='flex gap-5 flex-col flex-wrap flex-start mt-10'>
                {list.map(item => (
                    <div className='w-[70%]' key={item.id}>
                        <Link to={`${Routes.CATEGORY}/${item.id}`}>
                            <CategoryCard
                                title={item.name.ru}
                                img={item.url.ru}
                                status={item.status}/>
                        </Link>
                    </div>
                ))}
            </div>
        </ContentLayout>
    );
}

export default DocumentsScreen;
