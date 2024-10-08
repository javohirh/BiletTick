import React from 'react';
import ContentLayout from "../../../components/content-layout";
import {useCreateDocumentMutation} from "../../../services/queries/documents/useCreateDocumentMutation";
import {Form, Formik} from "formik";
import {useTranslation} from "react-i18next";
import FormInput from "../../../components/input/FormInput";
import FileInput from "../../../components/input/file-input";
import Button from "../../../components/button";
import ToastSuccess from "../../../components/notification/SuccessNotification";
import {useNavigate} from "react-router";
import {Routes} from "../../../constants/routes";

function CreateDocument() {
    const {t} = useTranslation();
    const createDoc = useCreateDocumentMutation();
    let navigate = useNavigate();

    const handleSubmit = (data) => {
        const requestBody = {
            name: {
                uz: data?.name,
                ru: data?.name,
                en: data?.name,
            },
            url: {
                uz: 'temp',
                ru: 'temp',
                en: 'temp',
            },
            status: true
        }
        createDoc.mutateAsync(requestBody)
            .then(() => {
                ToastSuccess('Document created successfully')
                navigate(Routes.SETTINGS_DOCUMENTS)
            })
            .catch(err => console.warn(err))

    }
    return (
        <ContentLayout breadcrumb={true}>
            <Formik
                initialValues={{name: '', doc: null}}
                onSubmit={handleSubmit}>
                {({}) => (
                    <Form>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3 mb-8'>
                            {t('document_information')}
                        </p>
                        <FormInput name='name' label={t('document_name')}/>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3 mb-8'>
                            {t('content')}
                        </p>
                        <FileInput
                            id='document'
                            label={t('documnet_content')}
                        />
                        <div className='flex items-center gap-6 mt-10'>
                            <Button className='bg-main-black'>
                                {t('cancel')}
                            </Button>
                            <Button
                                type='submit'
                                loading={createDoc?.isLoading}
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

export default CreateDocument;
