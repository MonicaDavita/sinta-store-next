import { useState } from 'react';
import Header from './Header'
import { loginFields } from "./formFields.js";
import FormAction from "./FormAction.js";
import FormExtra from "./FormExtra.js";
import Input from "./Input.js";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () => {

    }

    return (
        <>
            <Header
                heading="Hello!"
                paragraph="Welcome back, you've been missed "
                toSignin="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/Signup"
            />
            <div className='flex flex-col items-center'>
                <form className='mt-8 space-y-6 ' onSubmit={handleSubmit}>
                    <div className='w-full'>
                        {
                            fields.map(field =>
                                <Input
                                    key={field.id}
                                    handleChange={handleChange}
                                    value={loginState[field.id]}
                                    labelText={field.labelText}
                                    labelFor={field.labelFor}
                                    id={field.id}
                                    name={field.name}
                                    type={field.type}
                                    isRequired={field.isRequired}
                                    placeholder={field.placeholder}
                                />

                            )
                        }
                    </div>

                    <FormExtra />
                    <FormAction handleSubmit={handleSubmit} text='Login' />

                </form>
            </div>
        </>
    )
}