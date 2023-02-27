import React, { useState } from 'react';
import styles from "./styles/Username.module.css";
import { Link } from "react-router-dom";
import avatar from '../assets/profile-picture-3.jpg'
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "./helper/validate";
import convertToBase64 from "./helper/convert";


function Register () {
    const [file,setFile] =  useState()
    const formik = useFormik(
        {
            initialValues : {
                email:'',
                username:'',
                password:''
            },
            validate : registerValidation, 
            validateOnBlur:false,
            validateOnChange:false,
            onSubmit : async (values)=>{
                values = await Object.assign(values,{profile: file || ''})
                console.log(values)
            }
        }
    )
    /** formik doensn't support file upload so we need to create this handler */
    const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
    }
    
    return (
        <div className='container m-auto '>
            <Toaster position='top-center' reverseOrder='false'></Toaster>
            <div className='flex justify-center h-screen'>
                <div className={styles.card}>
                    <form className="space-y-5 " onSubmit={formik.handleSubmit}  action="#">
                        <h5 className="text-2xl font-medium text-center text-gray-900 dark:text-white">Register</h5>
                        <p className="text-lg text-center w-15 font-medium text-gray-900 dark:text-white">Explore More by connecting with us</p>
                        <div className='flex flex-col space-y-3'>
                            <label htmlFor="profile">
                            <img src={file || avatar} className="w-24 h-24 mb-3 m-auto rounded-full items-center shadow-lg  "  alt="profile "/>
                            </label>
                            <input onChange={onUpload} type="file" id="profile" name="profile"/>
                            <input {...formik.getFieldProps('email')} type="email" name="email" id="email" className={styles.textbox} placeholder="email" required/>
                            <input {...formik.getFieldProps('username')} type="text" name="username" id="username" className={styles.textbox}  placeholder="username" required/>
                            <input {...formik.getFieldProps('password')} type="password" name="password" id="password" className={styles.textbox}  placeholder="Password" required/>
                            <button type="submit" className={styles.btn}>
                            Register
                        </button>
                        <div className="text-sm font-medium text-gray-500 text-center dark:text-gray-300">Already Register? 
                            <Link to="/" className="text-blue-700 hover:underline dark:text-blue-500">Login Now</Link>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default Register ;