import { useState } from 'react';
import { signupFields } from "./constants/formFields"
import FormAction from "./components/FormAction";
import Header from './components/Header'
import Input from "./components/Input";

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupState)
        createAccount()
    }

    //handle Signup API Integration here
    const createAccount = () => {

    }

    return (
      <>
      <Header
        heading="Hai, new user!"
        paragraph="Your journey starts here"
        toSignin="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <div className='flex flex-col items-center'>
        <form className='mt-8 w-80' onSubmit={handleSubmit}>
        <div className="w-full">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
          <FormAction handleSubmit={handleSubmit} text='Signup' />
          </form >
      </div>
      </>
    )
}