import React, { useState, useEffect } from 'react';
import axios from 'axios'
import * as yup from 'yup'

const initialFormValues = {
    ///// TEXT INPUTS /////
    name: '',
    password: '',
}

const initialFormErrors = {
    name: '',
    password: '',
}

const initialUsers = []
const initialDisabled = true

const SignUp = () => {
    // ```````````````````````States```````````: 
    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    // ````````````````````Helpers````````````````````:
    const formSchema = yup.object().shape({

        name: yup.string()
            .trim()
            .min(4, 'Name has to be at least 4 characters long')
            .required('Name is required field'),
        password: yup.string()
            .trim()
            .min(5, 'Password has to be at least 5 characters long')
            .required('Password is required field'),
    })



    const postNewUser = newUser => {
        axios.post('https://reqres.in/api/users', newUser)

          .then(response => {
            // debugger
            setUsers([response.data, ...users])

          })
          .catch(error => {
            debugger
          })
          .finally(() => {
            setFormValues(initialFormValues)
          })
    }


    const onInputChange = event => {

        const { name } = event.target
        const { value } = event.target

        yup
            .reach(formSchema, name)
            // we can then run validate using the value
            .validate(value)
            .then(valid => {
                // happy path, we can clear the error message
                setFormErrors({
                    ...formErrors,
                    [name]: ''
                })
            })
            .catch(err => {
                // sad path, does not validate so we set the error message to the message 
                // returned from yup (that we created in our schema)
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })
        setFormValues({ ...formValues, [name]: value })

    }

    const onSubmit = event => {
        event.preventDefault()

        const newUser = {
            name: formValues['name'].trim(),
            password: formValues['password'].trim(),

        }

        postNewUser(newUser)

    }

    useEffect(() => {
        formSchema.isValid(formValues)
            .then(valid => {
                setDisabled(!valid)
            })
    }, [formValues])


    return (
        <form onSubmit={onSubmit}>
            <h2>Sign Up:</h2>
            <div className='errors'>
                <div>{formErrors.name}</div>
                <div>{formErrors.password}</div>
            </div>

            <div className='inputs'>
             
                <label>Name/Username?
        <input
                        value={formValues.name}//update later
                        onChange={onInputChange} //update Later
                        name='name' //maybe username? 
                        type='text'
                        placeholder='Type a name' // or username
                    />
                </label>
            
                <label>Password
        <input
                        value={formValues.password}//update later
                        onChange={onInputChange} //update Later
                        name='password' //maybe username? 
                        type='password'
                        placeholder='Type a password' // or username
                    />
                </label>

            </div>

            <button disabled={disabled}>submit</button>

            {users.map((user, index) => {
                // debugger
                return (
                    <div key={index}>
                        <h2>Welcome {user.name} !</h2>
                    </div>
                )
            })
            }
        </form>
    )
}

export default SignUp