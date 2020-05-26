import React, { useState, useEffect } from 'react';
import axios from 'axios'
import * as yup from 'yup'
import { Link } from 'react-router-dom';

const initialFormValues = {
    ///// TEXT INPUTS /////
    username: '',
    password: '',
}

const initialFormErrors = {
    username: '',
    password: '',
}

const initialUsers = []
const initialDisabled = true

const Login = () => {
    // debugger
    // const {
    //     values,
    //     onInputChange,
    //     onSubmit,
    //     disabled,
    //     errors,
    //     // onCheckboxChange,
    // } = props

    // ```````````````````````States```````````: 
    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    // ````````````````````Helpers````````````````````:
    const formSchema = yup.object().shape({

        username: yup.string()
            .trim()
            .min(4, 'Username has to be at least 4 characters long')
            .required('Username is required field'),
        password: yup.string()
            .trim()
            .min(5, 'Password has to be at least 5 characters long')
            .required('Password is required field'),
    })


    // 'https://reqres.in/api/users'
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
            username: formValues['username'].trim(),
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
        <>
            <div className='haveAccount'>
                <h4> Don't have an account? </h4>
                <button className='signUpBtn'>
                    <Link to='/signUp'>Sign Up</Link>
                </button>
            </div>

            <form onSubmit={onSubmit}>
                <h2>Login:</h2>
                <div className='errors'>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>

                <div className='inputs'>

                    <label>Username
        <input
                            value={formValues.username}//update later
                            onChange={onInputChange} //update Later
                            name='username' //maybe username? 
                            type='text'
                            placeholder='Type a username' // or username
                        />
                    </label>

                    <label>Password:
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
                            <h2>Welcome back {user.username} !</h2>
                            {/* Update later */}
                        </div>
                    )
                })
                }

            </form>



        </>
    )
}

export default Login