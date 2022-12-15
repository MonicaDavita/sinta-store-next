import { useState } from 'react';
import Header from './components/Header'
import { loginFields } from "./constants/formFields.js";
import FormAction from "./components/FormAction.js";
import FormExtra from "./components/FormExtra.js";
import Input from "./components/Input.js";
import Router from 'next/router';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
     
    const [loginState, setLoginState] = useState(fieldsState);
    const[resJSON, setResJSON] = useState(null)

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
        if (resJSON != null && resJSON.status == true){
            Router.push('/home')
          }
    }

    //Handle Login API Integration here
    const authenticateUser = () => {
        async function postData(url = 'https://sinta.gdlx.live/auth/login', data = {loginState}) {
    
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: new Headers({'content-type': 'application/json'}),
                body: JSON.stringify(data.loginState)
            });
            
            console.log(response)
            const json = await response.json();
            setResJSON(json);
            return json
         }
         var response = postData() 
         response.then(res =>{
            if (res != null && res.status == true) {
                window.localStorage.setItem("token", res.data)
                Router.push('/home')
            }
         })
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