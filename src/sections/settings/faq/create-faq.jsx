import React from 'react';
import ContentLayout from "../../../components/content-layout";
import {Form, Formik} from "formik";
import FormInput from "../../../components/input/FormInput";
import SelectInput from "../../../components/select/select-input";
import {STATUS_OPTION} from "../../categories/create-category";
import {useTranslation} from "react-i18next";
import {useCreateFaqMutation} from "../../../services/queries/faq/useCreateFaqMutation";
import Button from "../../../components/button";
import {useNavigate} from "react-router";
import ToastSuccess from "../../../components/notification/SuccessNotification";
import {Routes} from "../../../constants/routes";

function CreateFaq() {
    const {t} = useTranslation();
    const createFaq = useCreateFaqMutation();
    let navigate = useNavigate();

    const handleSubmit = (data) => {
        const requestBody = {
            itemOrder: data?.itemOrder,
            status: data?.status,
            question: {
                uz: data?.question_uz,
                en: data?.question_en,
                ru: data?.question_ru
            },
            answer: {
                uz: data?.answer_uz,
                en: data?.answer_en,
                ru: data?.answer_ru
            }
        }
        createFaq
            .mutateAsync(requestBody)
            .then(() => {
                ToastSuccess('FAQ successfully created')
                navigate(Routes.SETTINGS_FAQ);
            })
            .catch(err => console.warn(err))

    }


    return (
        <ContentLayout breadcrumb={true}>
            <Formik initialValues={{
                question_uz: '',
                question_ru: '',
                question_en: '',
                answer_uz: '',
                answer_ru: '',
                answer_en: '',
                itemOrder: 0,
                status: true,
            }} onSubmit={handleSubmit}>
                {({values, setFieldValue}) => (
                    <Form>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3'>
                            {t('questions_information')}
                        </p>
                        <div className='flex gap-6 flex-wrap mt-6'>
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
                        <p className='text-[20px] font-semibold mt-12 text-gray-3'>
                            {t('questions')}
                        </p>
                        <div className='flex flex-col gap-6 w-[70%] mt-6'>
                            <FormInput
                                wFull
                                name='question_uz'
                                label={t('question_uz')}/>
                            <FormInput
                                wFull
                                name='question_ru'
                                label={t('question_ru')}/>
                            <FormInput
                                wFull
                                name='question_en'
                                label={t('question_en')}/>
                        </div>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3'>
                            {t('answer')}
                        </p>
                        <div className='flex flex-col gap-6 w-[70%] mt-6'>
                            <FormInput
                                wFull
                                name='answer_uz'
                                label={t('answer_uz')}/>
                            <FormInput
                                wFull
                                name='answer_ru'
                                label={t('answer_ru')}/>
                            <FormInput
                                wFull
                                name='answer_en'
                                label={t('answer_en')}/>
                        </div>
                        <div className='flex items-center gap-6 mt-10'>
                            <Button className='bg-main-black'>
                                {t('cancel')}
                            </Button>
                            <Button
                                type='submit'
                                loading={createFaq?.isLoading}
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

export default CreateFaq;
