import { useState } from 'react';
import { signupFields } from "./constants/formFields"
import FormAction from "./components/FormAction";
import Header from './components/Header'
import Input from "./components/Input";
import Router from 'next/router';


const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
    const [signupState, setSignupState] = useState(fieldsState);
    const[resJSON, setResJSON] = useState(null)
    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupState)
        createAccount();
        if (resJSON != null && resJSON.status == true){
          Router.push('/')
        }
    }

    //handle Signup API Integration here
    const createAccount = () => {
      async function postData(url = 'https://sinta.gdlx.live/auth/register', data = {signupState}) {
    
      const response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: new Headers({'content-type': 'application/json'}),
          body: JSON.stringify(data.signupState)
      });
      
      const json = await response.json();
      setResJSON(json);
      return json
   }
   var response = postData() 
   response.then(res =>{
      if (res.status == true) {
        
      }
   })
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