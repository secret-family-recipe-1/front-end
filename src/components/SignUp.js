import React, { useState, useEffect } from 'react';
import axios from 'axios'
import * as yup from 'yup'
import { Link } from 'react-router-dom';

const initialFormValues = {
    ///// TEXT INPUTS /////
    username: '',
    password: '',
    name: '',
    location: '',
}

const initialFormErrors = {
    username: '',
    password: '',
    name: '',
    location: '',
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

        username: yup.string()
            .trim()
            .min(4, 'Username has to be at least 4 characters long')
            .required('Username is required field'),
        password: yup.string()
            .trim()
            .min(5, 'Password has to be at least 5 characters long')
            .required('Password is required field'),
        location: yup.string()
            .trim()
            .min(2, 'Location has to be at least 2 characters long')
            .required('Location is required field, please specify your state'),
        name: yup.string()
            .trim()
            // .min(4, 'Name has to be at least 4 characters long')
            .required('Name is required field'),
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
            username: formValues['username'].trim(),
            password: formValues['password'].trim(),
            location: formValues['location'].trim(),
            name: formValues['name'].trim(),
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
                <h4> Already have an account? </h4>
                <button className='loginBtn'>
                    <Link to='/login'>Login</Link>
                </button>
            </div>

            <form onSubmit={onSubmit}>
                <h2>Sign Up:</h2>
                <div className='errors'>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                    <div>{formErrors.location}</div>
                    <div>{formErrors.name}</div>
                </div>

                <div className='inputs'>

                    <label>Username
        <input
                            value={formValues.username}
                            onChange={onInputChange}
                            name='username'
                            type='text'
                            placeholder='Type a username'
                        />
                    </label>

                    <label>Password:
        <input
                            value={formValues.password}
                            onChange={onInputChange}
                            name='password'
                            type='password'
                            placeholder='Type a password'
                        />
                    </label>

                    <label>Name:
        <input
                            value={formValues.name}
                            onChange={onInputChange}
                            name='name'
                            type='text'
                            placeholder='Type a name'
                        />
                    </label>

                    <label>Location:
        <input
                            value={formValues.location}
                            onChange={onInputChange}
                            name='location'
                            type='text'
                            placeholder='Type a location/state'
                        />
                    </label>

                </div>

                <button disabled={disabled}>submit</button>

                {users.map((user, index) => {
                    // debugger
                    return (
                        <div key={index}>
                            <h2>Hello {user.name} !</h2>
                            <h3>Your information:</h3>
                            <p>Username: {user.username}</p>
                            <p>Password: {user.password}</p>
                            <p>Location: {user.location}</p>
                        </div>
                    )
                })
                }

            </form>

        </>
    )
}

export default SignUp