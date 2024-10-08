import React from 'react';
import ContentLayout from "../../components/content-layout";
import {Form, Formik} from "formik";
import FormInput from "../../components/input/FormInput";
import FileInput from "../../components/input/file-input";
import SelectInput from "../../components/select/select-input";
import Button from "../../components/button";
import {useCreateCategoryMutation} from "../../services/queries/categories/useCreateCategoryMutation";
import ToastSuccess from "../../components/notification/SuccessNotification";
import {useNavigate} from "react-router";
import {Routes} from "../../constants/routes";
import {useTranslation} from "react-i18next";


export const STATUS_OPTION = (t) => {
    return [
        {value: true, label: t('enable')},
        {value: false, label: t('disable')},
    ]
}

function CreateCategory(props) {
    const {t} = useTranslation();
    const createCategory = useCreateCategoryMutation()
    let navigate = useNavigate();

    const addCategory = (data) => {
        const requestBody = {
            name: {
                uz: data?.name_uz,
                ru: data?.name_ru,
                en: data?.name_en,
            },
            icon: 'temp',
            status: data?.status || false,
            itemOrder: +data?.itemOrder || 0,
        }
        createCategory
            .mutateAsync(requestBody)
            .then(() => {
                ToastSuccess('Category successfully created')
                navigate(Routes.CATEGORY);
            })
            .catch(err => console.warn(err))
    }

    return (
        <ContentLayout breadcrumb={true}>
            <Formik initialValues={{
                name_uz: '',
                name_ru: '',
                name_en: '',
                order: 0,
            }} onSubmit={addCategory}>
                {({setFieldValue}) => (
                    <Form>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3'>{t('category_name')}</p>
                        <div className='flex gap-6 flex-wrap mt-6'>
                            <FormInput name='name_uz' label={t('name_uz')}/>
                            <FormInput name='name_ru' label={t('name_ru')}/>
                            <FormInput name='name_en' label={t('name_en')}/>
                        </div>
                        <div className='flex gap-6 flex-wrap mt-6'>
                            <FileInput id='icon' label={t('icon')}/>
                            <FormInput
                                name='itemOrder'
                                type='number'
                                label={t('order')}/>
                            <SelectInput
                                label={t('status')}
                                onChange={ev => setFieldValue('status', ev?.value)}
                                options={STATUS_OPTION(t)}
                            />
                        </div>
                        <div className='flex items-center gap-6 mt-10'>
                            <Button className='bg-main-black'>
                                {t('cancel')}
                            </Button>
                            <Button
                                type='submit'
                                loading={createCategory?.isLoading}
                                className='bg-accent-green'>
                                {t('create')}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>

        </ContentLayout>
    );
}

export default CreateCategory;
