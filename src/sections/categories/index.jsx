import React from 'react';
import ContentLayout from "../../components/content-layout";
import Tab from "../../components/tabs/Tab";
import CategoryCard from "../../components/cards/CategoryCard";
import Button from "../../components/button";
import {Routes} from "../../constants/routes";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useGetCategoriesList} from "../../services/queries/categories/useGetCategoriesQuery";

function CategoriesScreen() {
    const {t} = useTranslation();
    const categoriesList = useGetCategoriesList()
    const categories = categoriesList.data?.data || []
    return (
        <ContentLayout
            loader={categoriesList.isLoading}
            rightAction={<Link to={Routes.ADD_CATEGORY}>
                <Button className='bg-accent-green h-[52px]'>{t('add')}</Button>
            </Link>}
            title={t('category')}>
            <Tab tabs={[
                {label: 'Поставщики', value: 'supplier'},
                {label: 'Сеансы', value: 'seance'},
            ]}/>

            <div className='grid grid-cols-4 gap-5 mt-10'>
                {categories.map(item => (
                    <div className='flex-1' key={item.id}>
                        <Link to={`${Routes.CATEGORY}/${item.id}`}>
                            <CategoryCard
                                title={item.name.ru}
                                img={item.icon}
                                status={item.status}/>
                        </Link>
                    </div>
                ))}
            </div>
        </ContentLayout>
    );
}

export default CategoriesScreen;
