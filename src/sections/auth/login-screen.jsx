import React from 'react';
import {ReactComponent as Logo} from "../../assets/logo.svg";
import FormInput from "../../components/input/FormInput";
import Button from "../../components/button";
import {Form, Formik} from "formik";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router";

function LoginScreen() {
    const [, setCookie] = useCookies(['accessToken']);
    const navigate = useNavigate();
    const handleSubmit = (data) => {
        console.log('-----',data)
        const token = "isAdmin"
        if (data?.pass==='admin'){
            setCookie('accessToken',token,{path:'/'})
            navigate('/')
        }

    }
    return (
        <Formik
            initialValues={{username:'',pass:''}}
            onSubmit={handleSubmit}>
            {({})=>(<Form>
                <div className='w-full flex justify-center items-center flex-col h-[100vh]'>
                    <Logo width={250} className='mt-10'/>
                    <div className='flex-1 flex items-center flex-col justify-center'>
                        <p className='text-[32px] font-[500] text-white text-center'>Авторизация</p>
                        <p className='text-[16px] font-[400] text-text-gray mt-2 text-center w-[300px]'>
                            Введите логин и пароль для
                            входа в систему
                        </p>
                        <div className='flex gap-8 flex-col mt-8'>
                            <FormInput name='username' label='Логин' placeholder='Введите свой логин'/>
                            <FormInput name='pass' label='Пароль' placeholder='Введите свой пароль'/>
                            <Button type='submit'>Вход</Button>
                        </div>
                    </div>
                    <p className='w-[380px] text-text-gray font-[400] text-[14px] text-center mb-10'>
                        Если вы не помните свой логин или пароль, свяжитесь
                        с поддержкой по номеру <span className='text-main'>+998 20 008 08 02</span>
                    </p>
                </div>
            </Form>)}

        </Formik>

    );
}

export default LoginScreen;
