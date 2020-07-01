import React from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import './otherRegister.css'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterValidationNow = ()=>(
    <Formik
     initialValues={{full_Name: '', user_Name: '', password: '', email: '', bitcoin: '', bitcoinCash: '',perfectMoney: '', payPal: ''}}
    onSubmit={(values,{setSubmitiing})=>{
        console.log('loggin')
    }}
     
     validationSchema = {Yup.object().shape({
         full_Name: Yup.string().min(8).required(),
         user_Name: Yup.string().min(5).required(),
         password: Yup.string().min(6).max(250).required().matches(/(?=.*[0-9])/,('Password must contain number')),
         email: Yup.string().email().required(),
         bitcoin: Yup.string(),
         bitcoinCash: Yup.string(),
         perfectMoney: Yup.string(),
         payPal: Yup.string()
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
                const onSubmitValidation =()=>{
                    const newMember = {
                        full_Name: values.full_Name,
                        user_Name: values.user_Name,
                        password: values.password,
                        email: values.email,
                        bitcoin: values.bitcoin,
                        bitcoinCash: values.bitcoinCash,
                        perfectMoney: values.perfectMoney,
                        payPal: values.payPal

                    }
                    if(!newMember.full_Name || !newMember.user_Name || !newMember.password || !newMember.email){
                        toast.error("Filled the form")
                        return false;
                    }

                    if(!newMember.bitcoin && !newMember.bitcoinCash && !newMember.perfectMoney && !newMember.payPal){
                        toast.warn(" Payment Address Required !");
                        return false;
                    
                    }
                   
                    axios.post( "http://localhost:8000/user/register", newMember).then(res => { toast.success("Register Successful Login !")}, ).then(res => window.location="/login").catch(err => toast.error(err.response.data))
                       
                    
                    
                  
                }
                
                return(
                    <div className='form-main'>
                        <ToastContainer />
                        <div className='form-a'>
                            <div className='memberNow'>
                                <h1>REGISTER MEMBER</h1>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <table>
                                    <tr>
                                        <td><label>Full Name:</label></td>
                                        <td><input value={values.full_Name} name='full_Name' onChange={handleChange} onBlur={handleBlur} className={errors.full_Name && touched.full_Name && 'error'}  placeholder='Full Name'/>
                                        {errors.full_Name && touched.full_Name && (
                                            <div className='inputFeedBack'>{errors.full_Name}</div>
                                        )}</td>
                                    </tr>
                                    <tr>
                                        <td><label>User Name:</label></td>
                                        <td><input value={values.user_Name} name='user_Name' onChange={handleChange} onBlur={handleBlur} className={errors.user_Name && touched.user_Name && 'error'} placeholder='User Name'/>
                                        {errors.user_Name && touched.user_Name && (
                                            <div className='inputFeedBack'>{errors.user_Name}</div>
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
                                        <td><label>Email:</label></td>
                                        <td><input value={values.email} name='email' onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email && 'error'} placeholder='Email'/>
                                        {errors.password && touched.password && (
                                            <div className='inputFeedBack'>{errors.email}</div>
                                        )}</td>
                                    </tr>
                                   
                                    <div className='memberNow'>
                                        <h1>PAYMENT ADDRESS </h1>
                                    </div>
                                    <tr>
                                        <td><label>Bitcoin</label></td>
                                        <input value={values.bitcoin} onChange={handleChange} onBlur={handleBlur} name='bitcoin' placeholder='Bitcoin Address'/>
                                    </tr>
                                    <tr>
                                        <td><label>bitcoinCash</label></td>
                                        <input value={values.bitcoinCash} onChange={handleChange} onBlur={handleBlur} name='bitcoinCash' placeholder='BitcoinCash Address'/>
                                    </tr>
                                    <tr>
                                        <td><label>perfectMoney</label></td>
                                        <input value={values.perfectMoney} onChange={handleChange} onBlur={handleBlur} name='perfectMoney' placeholder='PerfectMoney Address'/>
                                    </tr>
                                    <tr>
                                        <td><label>PayPal</label></td>
                                        <input value={values.payPal} onChange={handleChange} onBlur={handleBlur} name='payPal' placeholder='payPal Address'/>
                                    </tr>
                                    <tr>
                                        <td><a href=''><button type='submit' className='btn btn-warning' disable={isSubmitting} onClick={onSubmitValidation}>Register</button></a></td>
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

export default RegisterValidationNow;