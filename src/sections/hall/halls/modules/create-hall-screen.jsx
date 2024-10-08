import React from 'react';
import {Form, Formik} from "formik";
import FormInput from "../../../../components/input/FormInput";
import Button from "../../../../components/button";
import ContentLayout from "../../../../components/content-layout";
import {useTranslation} from "react-i18next";
import SelectInput from "../../../../components/select/select-input";
import {Link} from "react-router-dom";
import {Routes} from "../../../../constants/routes";

function CreateHallScreen(props) {
    const {t} = useTranslation();
    return (
        <ContentLayout breadcrumb={true}>
            <Formik initialValues={{}} onSubmit={(data) => console.log('submit', data)}>
                {({}) => (
                    <Form>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3'>{t('title')}</p>
                        <div className='flex gap-6 flex-wrap mt-6'>
                            <FormInput name='nameUz' label={t('name_uz')}/>
                            <FormInput name='nameRu' label={t('name_ru')}/>
                            <FormInput name='nameEn' label={t('name_en')}/>
                        </div>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3'>{t('status')}</p>
                        <div className='flex gap-6 flex-wrap mt-6'>
                            <SelectInput
                                name='addiction'
                                options={[]}
                                label={t('addiction')}/>
                            <SelectInput
                                name='addiction_merchant'
                                options={[]}
                                label={t('addiction_merchant')}/>
                            <SelectInput
                                name='status'
                                options={[]}
                                label={t('status')}/>
                        </div>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3'>{t('address')}</p>
                        <div className='flex flex-col gap-6 flex-wrap mt-6 max-w-[1190px]'>
                            <FormInput name='addressUz' label={t('address_uz')} wFull/>
                            <FormInput name='addressRu' label={t('address_ru')} wFull/>
                            <FormInput name='addresEn' label={t('address_en')} wFull/>
                            <div className='flex gap-6'>
                                <FormInput name='lat' label={t('lat')}/>
                                <FormInput name='long' label={t('long')}/>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[20px] font-semibold mt-12 text-gray-3'>{t('map_of_hall')}</p>
                            <Link to={Routes.HALL_EDITOR}>
                                <Button className='bg-accent-green'>
                                    {t('add_hall')}
                                </Button>
                            </Link>
                        </div>
                        <div className='flex gap-6 mt-6'>
                            <FormInput name='xCordinate' label={t('x_cordinate')}/>
                            <FormInput name='yCordinate' label={t('y_cordinate')}/>
                        </div>
                        <div className='w-full h-[400px] rounded-[8px] bg-main-black mt-6'>

                        </div>
                        <div className='flex items-center gap-6 mt-10'>
                            <Button className='bg-main-black'>
                                Отменить
                            </Button>
                            <Button type='submit' className='bg-accent-green'>
                                Добавить
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>

        </ContentLayout>);
}

export default CreateHallScreen;
