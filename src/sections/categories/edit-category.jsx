import React from 'react';
import ContentLayout from "../../components/content-layout";
import {Form, Formik} from "formik";
import FormInput from "../../components/input/FormInput";
import FileInput from "../../components/input/file-input";
import SelectInput from "../../components/select/select-input";
import Button from "../../components/button";
import ToastSuccess from "../../components/notification/SuccessNotification";
import {useNavigate, useParams} from "react-router";
import {Routes} from "../../constants/routes";
import {useTranslation} from "react-i18next";
import {useGetCategoryItemQuery} from "../../services/queries/categories/useGetCategoryItemQuery";
import {useEditCategoryItemMutation} from "../../services/queries/categories/useEditCategoryItemMutation";


export const STATUS_OPTION = (t) => {
    return [
        {value:true,label:t('enable')},
        {value:false,label:t('disable')},
    ]
}
function EditCategory() {
    const { t } = useTranslation();
    let { id } = useParams();
    const categoryItem = useGetCategoryItemQuery(id)
    const editCategoryMutate = useEditCategoryItemMutation()
    let navigation = useNavigate();

    console.log('navigation---------',categoryItem)

    const  editCategory = (data) => {
        const requestBody={
            name:{
                uz:data?.name_uz,
                ru:data?.name_ru,
                en:data?.name_en,
            },
            icon:'temp',
            status:data?.status||false,
            itemOrder:+data?.itemOrder||0,
        }
        editCategoryMutate
            .mutateAsync(requestBody)
            .then(()=>{
                ToastSuccess('Category successfully created')
                navigation(Routes.CATEGORY);
            })
            .catch(err=>console.warn(err))
    }

    return (
        <ContentLayout breadcrumb={true} currentCrumb={t('edit')}>
            <Formik initialValues={{}} onSubmit={editCategory}>
                {({setFieldValue})=>(
                    <Form>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3'>{t('category_name')}</p>
                        <div className='flex gap-6 flex-wrap mt-6' >
                            <FormInput name='name_uz' label={t('name_uz')}/>
                            <FormInput name='name_ru' label={t('name_ru')}/>
                            <FormInput name='name_en' label={t('name_en')}/>
                        </div>
                        <div  className='flex gap-6 flex-wrap mt-6'>
                            <FileInput id='icon' label={t('icon')}/>
                            <FormInput
                                name='itemOrder'
                                type='number'
                                label={t('order')}/>
                            <SelectInput
                                label={t('status')}
                                onChange={ev=>setFieldValue('status',ev?.value)}
                                options={STATUS_OPTION(t)}
                            />
                        </div>
                        <div className='flex items-center gap-6 mt-10'>
                            <Button className='bg-main-black'>
                                {t('cancel')}
                            </Button>
                            <Button
                                type='submit'
                                loading={editCategoryMutate?.isLoading}
                                className='bg-accent-green'>
                                {t('save')}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>

        </ContentLayout>
    );
}

export default EditCategory;
