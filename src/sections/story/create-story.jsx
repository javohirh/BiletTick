import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import ContentLayout from "../../components/content-layout";
import {Form, Formik} from "formik";
import FormInput from "../../components/input/FormInput";
import FileInput from "../../components/input/file-input";
import SelectInput from "../../components/select/select-input";
import Button from "../../components/button";
import {STATUS_OPTION} from "../categories/create-category";
import Switch from "../../components/switch/Switch";
import {useCreateStoryMutation} from "../../services/queries/story/useCreateStoryMutation";
import ToastSuccess from "../../components/notification/SuccessNotification";
import {useNavigate} from "react-router";
import {Routes} from "../../constants/routes";

function CreateStory() {
    const {t} = useTranslation();
    const createStory = useCreateStoryMutation()
    let navigate = useNavigate();
    const [switchOn, setSwitchOn] = useState(true)

    const initialValues = {
        name_uz: '',
        name_ru: '',
        name_en: '',
        itemOrder: 0,
        status: true,
        miniImageUz: 'temp',
        miniImageRu: 'temp',
        miniImageEn: 'temp',
        fullImageUz: 'temp',
        fullImageRu: 'temp',
        fullImageEn: 'temp',
        hyperlink: '',
        button_uz: '',
        button_ru: '',
        button_en: '',
    }

    const handleSubmit = (data) => {
        const requestBody = {
            imageUrl: {
                uz: data?.fullImageUz || null,
                ru: data?.fullImageRu || null,
                en: data?.fullImageEn || null,
            },
            miniImageUrl: {
                uz: data?.miniImageUz || null,
                ru: data?.miniImageRu || null,
                en: data?.miniImageEn || null,
            },
            name: {
                uz: data?.name_uz,
                ru: data?.name_ru,
                en: data?.name_en,
            },
            button: {
                uz: data?.button_uz || null,
                ru: data?.button_ru || null,
                en: data?.button_en || null,
            },
            hyperlink: data?.hyperlink || null,
            showButton: data?.status || false
        }

        createStory.mutateAsync(requestBody)
            .then(() => {
                ToastSuccess('Story created Successfully');
                navigate(Routes.STORY)
            })
            .catch(err => console.warn(err))

    }
    return (
        <ContentLayout breadcrumb={true}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({setFieldValue}) => (
                    <Form>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3'>{t('storiy_name')}</p>
                        <div className='flex gap-6 flex-wrap mt-6'>
                            <FormInput name='name_uz' label={t('name_uz')}/>
                            <FormInput name='name_ru' label={t('name_ru')}/>
                            <FormInput name='name_en' label={t('name_en')}/>
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
                        <p className='text-[20px] font-semibold mt-12 text-gray-3'>{t('mini_images')}</p>
                        <div className='flex gap-6 flex-wrap mt-6'>
                            <FileInput id='miniImageUz' label={t('uz_200x280')}/>
                            <FileInput id='miniImageRu' label={t('ru_200x280')}/>
                            <FileInput id='miniImageEn' label={t('en_200x280')}/>
                        </div>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3'>{t('full_images')}</p>
                        <div className='flex gap-6 flex-wrap mt-6'>
                            <FileInput id='fullImageUz' label={t('uz_1080x1920')}/>
                            <FileInput id='fullImageRu' label={t('ru_1080x1920')}/>
                            <FileInput id='fullImageEn' label={t('en_1080x1920')}/>
                        </div>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3 mb-8'>{t('navigation_button')}</p>
                        <div
                            className='flex w-[380px] py-[22px] px-5 items-center justify-between bg-main-black rounded-[12px]'>
                            <p className='text-[16px] font-semibold'>{t('hyperlink')}</p>
                            <Switch on={switchOn} onClick={() => setSwitchOn(prev => !prev)}/>
                        </div>
                        {switchOn &&
                            <div className='flex gap-6 flex-wrap mt-6 max-w-[75.5%]'>
                                <FormInput name='button_uz' label={t('name_uz')}/>
                                <FormInput name='button_ru' label={t('name_ru')}/>
                                <FormInput name='button_en' label={t('name_en')}/>
                                <FormInput name='hyperlink' wFull={true} label={t('hyperlink')}/>
                            </div>
                        }

                        <div className='flex items-center gap-6 mt-10'>
                            <Button className='bg-main-black'>
                                {t('cancel')}
                            </Button>
                            <Button
                                type='submit'
                                loading={createStory?.isLoading}
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

export default CreateStory;
