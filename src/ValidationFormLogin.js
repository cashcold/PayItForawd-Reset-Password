import React from 'react';
import './validation.css'
import {Formik} from 'formik'
import * as Yup from 'yup'

const ValidationFormLogin = ()=> (
    <Formik initialValues={{email: '', password: ''}} 
    onSubmit={(values, {setSubmiting}) =>{
        setTimeout(()=>{
            console.log('Login values ', values)
        },500)
    }}
        validationSchema = {Yup.object().shape({
            email: Yup.string()
            .email()
            .required("Email Required"),
            password: Yup.string().required("enter Password").min(8,"Password must be more than 8").matches(/(?=.*[0-9])/,"Password must container Number")
        })}
    
    
    
    >
        {
            props =>{
                const {
                    values, 
                    touched,
                    errors,
                    isSubmiting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;
                return(
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <label htmlFor='email'>Email</label>
                        <input value={values.email} onChange={handleChange} onBlur={handleBlur} name='email' placeholder='email' className={errors.email && touched.email && 'error'}/>
                        {errors.email && touched.email && (
                            <div className='input-feedback'>{errors.email}</div>
                        )}
                        <label htmlFor='password'>Password</label>
                        <input value={values.password} onChange={handleChange} onBlur={handleBlur}  name='password' placeholder='password' className={errors.password && touched.password && 'error'}/>
                        {errors.password && touched.password && (
                            <div className='input-feedback'>{errors.password}</div>
                        )}
                        <button type='submit' disabled={isSubmiting} className='btn btn-warning'>Login</button>
                    </form>
                )
            }
        }

    </Formik>
)

export default ValidationFormLogin;


