
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import './style.css'
import {Formik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


import { ToastContainer } from 'react-toastify';

const LoignValidationNow = ()=>(
   
    
    <Formik
     initialValues={{email: '', password: '',}}
    onSubmit={(values,{setSubmitiing})=>{
        console.log('loggin')
    }}
     
     validationSchema = {Yup.object().shape({
         email: Yup.string().min(5).required(),
         password: Yup.string().min(6).max(250).required().matches(/(?=.*[0-9])/,('Password must contain number')),
     })}
     
    >
        {
            
            props =>{
                const{
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    isSubmitting,
                    
                } = props;
                
                const onSubmitLogin = ()=>{
                    const LoginUser = {
                        email: values.email,
                        password: values.password
                    }

                    if(!LoginUser.email || !LoginUser.password){
                       return false
                    }
 
                   
                    axios.post( "http://localhost:8000/user/login",LoginUser).then(res => {
                        localStorage.setItem('x-access-token',JSON.stringify(res.data))
                        return res.data;
                    }).then(res => {toast.success("Login Successful !", setTimeout(()=>{
                        toast.success("LOADING ACCOUNT") 
                    },2000),{
                        
                        });}).then(res => window.location="/dashboard" ).catch(err => {toast.error(err.response.data, {
                        position: toast.POSITION.TOP_LEFT
                      });
                });
               
                }
                
                return(
                    <div className='form-main'>
                        <ToastContainer/>
                        <div className='form-a'>
                            <div className='memberNow'>
                                <h1>LOGIN MEMBER</h1>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <table>
                                    <tr>
                                        <td><label>Email:</label></td>
                                        <td><input value={values.email} name='email' onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email && 'error'} placeholder='User Name'/>
                                        {errors.email && touched.email && (
                                            <div className='inputFeedBack'>{errors.email}</div>
                                        )}</td>
                                    </tr>
                                    <tr>
                                        <td><label>Password:</label></td>
                                        <td><input value={values.password} name='password' onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password && 'error'} placeholder='Password'/>
                                        {errors.password && touched.password && (
                                            <div className='inputFeedBack'>{errors.password}</div>
                                        )}</td>
                                    </tr>
                                    <tr>
                                        <td><a href=''><button type='submit' className='btn btn-warning' disable={isSubmitting} onClick={onSubmitLogin}>Login</button></a></td>
                                        <td><a href='/forgotpassword' className='btn forgetPassword btn-danger'>Forgot Password</a></td>
                                    </tr>
                                </table>
                            </form>
                            
                        </div>
                       
                    </div>
                )
            }
        }

    </Formik>
)

export default LoignValidationNow;