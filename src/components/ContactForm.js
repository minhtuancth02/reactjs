import React , { useState, useEffect } from 'react'
import { isRequired, isEmail, isPhone } from '../validations'


const style = { fontFamily: "Montserrat', sans-serif", fontStyle: 'italic', fontSize: '14px', color: '#e65054' };

const initialFormValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: '',
};
const initialFormErrors = {
    fullName: [],
    mobile: [],
    email: [],
    address: []
};  

// Form Input
const ContactForm = ({ addOrEdit, currentId, contactObject }) => {

    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialFormErrors);
  
    function validate(validations, name, value) {
        setErrors(prevErrors => (
            {
                ...prevErrors,
                [name]: validations
                    .map(validator => validator(value))
                    .filter(errMsg => errMsg.length > 0)
            }
        ));

    };

    // Update values -> contactObject
    useEffect(() => {
        currentId === ""  
            ? setValues({...initialFormValues}) 
            : setValues({...contactObject[currentId]})
    }, [currentId, contactObject])

    // Input form
    const handleInputChange = (e) => {
        var { name , value } = e.currentTarget ;
        setValues({ ...values, [name]: value });
    };

    // Set contactObject
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const err = document.getElementsByClassName('error-display').innerText;
        if (err === '') {
            addOrEdit(values);
            setValues(initialFormValues); 
        } 
    };
    
    return (
        <form
            autoComplete='off'
            style={{ padding: '1.5rem' }}
            onSubmit={ handleFormSubmit }
        >
            <div
                className='error-display'
                style={style}>{errors.fullName.join(", ")}
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'><i className='fas fa-user'></i></div>
                </div>
                <input
                    className='form-control' placeholder='Full Name...'
                    name='fullName'
                    value={values.fullName}
                    onChange={handleInputChange}
                    onBlur={(e) => validate([isRequired], e.target.name, e.target.value) }
                    required autoFocus
                />
            </div>
            <div
                className='error-display'
                style={style}
            >
                {errors.mobile.join(", ")}
            </div>
            <div className='form-group input-group'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'><i className="fas fa-mobile-alt"></i></div>
                    </div>
                    <input
                        className='form-control' placeholder='Mobile...'
                        name='mobile'
                        value={values.mobile}
                        onChange={handleInputChange}
                        onBlur={(e) => validate([isPhone], e.target.name, e.target.value)}

                    />
            </div>

            <div style={style}>{errors.email.join(", ")}</div>
            <div className='form-group input-group'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'><i className="fas fa-reply"></i></div>
                    </div>
                    <input
                        className='form-control' placeholder='Email...'
                        name='email' 
                        value={values.email}
                        onChange={handleInputChange}
                        onBlur={(e) => validate([isEmail], e.target.name, e.target.value)}
                    />
            </div>
            
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'><i className="fas fa-location-arrow" /></div>
                </div>
                <input
                    className='form-control' placeholder='Address...'
                    name='address'
                    value={values.address}
                    onChange={handleInputChange}
                />
            </div>
            
            <div className='form-group'>
                <input
                    className={currentId === '' ? 'btn btn-primary btn-block' : 'btn btn-success btn-block'}
                    type='submit'
                    value={currentId === '' ? 'Add Contact' : 'Edit Contact'}
                />
            </div>
        </form>
    )
}

export default ContactForm
