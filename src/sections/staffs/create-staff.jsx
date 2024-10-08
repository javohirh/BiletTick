import React from 'react';
import ContentLayout from "../../components/content-layout";
import {Form, Formik} from "formik";
import FormInput from "../../components/input/FormInput";
import Button from "../../components/button";
import {useCreateStaffMutation} from "../../services/queries/staffs/useCreateStaffMutation";
import ToastSuccess from "../../components/notification/SuccessNotification";
import {useNavigate} from "react-router";
import {Routes} from "../../constants/routes";

function CreateStaff() {
    const createStaff = useCreateStaffMutation();
    let navigate = useNavigate();

    const handleSubmit  = (data) =>{
        const resBody = {
            login: data?.login||'',
            password: data?.password||'',
            msisdn: data?.msisdn||'',
            birthDate: '2024-06-26',
            fullName: `${data?.firstName} ${data?.name}`,
            isActive: true
        }
        createStaff
            .mutateAsync(resBody)
            .then(res =>{
                ToastSuccess('Staff successfully created');
                navigate(Routes.STAFF)
            })
            .catch(err => console.warn(err))
    }


    return (
        <ContentLayout breadcrumb={true}>
            <Formik
                initialValues={{
                    login:'',
                    password:'',
                    msisdn:'',
                    brithDate:'',
                    fullName:'',
                    name:'',
                    firstName:'',
                }}
                onSubmit={handleSubmit}>
                {({})=>(
                    <Form>
                        <p className='text-[20px] font-semibold mt-12 text-gray-3'>Данные сотрудника</p>
                        <div className='flex gap-6 flex-wrap mt-6' >
                            <FormInput name='phone' label='Номер телефона'/>
                            <FormInput name='name' label='Имя'/>
                            <FormInput name='firstName' label='Фамилия'/>
                        </div>
                        <div className='flex gap-6 flex-wrap mt-6' >
                            <FormInput name='msisdn' label='Электронная почта'/>
                            <FormInput name='login' label='Логин'/>
                            <FormInput name='password' label='Пароль'/>
                        </div>
                        <div className='flex items-center gap-6 mt-10'>
                            <Button className='bg-main-black'>
                                Отменить
                            </Button>
                            <Button
                                type='submit'
                                className='bg-accent-green'
                                loading={createStaff?.isLoading}>
                                Добавить
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>

        </ContentLayout>
    );
}

export default CreateStaff;
