import React, { useState } from 'react';
import styles from "./styles/Username.module.css";
import { Link } from "react-router-dom";
import avatar from '../assets/profile-picture-3.jpg'
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "./helper/validate";
import convertToBase64 from "./helper/convert";


function Profile () {
    const [file,setFile] =  useState()
    const formik = useFormik(
        {
            initialValues : {
                firstname:'',
                lastname:'',
                phone:'',
                email:'',
                address:''
            },
            validate : profileValidation, 
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
                        <h5 className="text-2xl font-medium text-center text-gray-900 dark:text-white">Profile</h5>
                        <p className="text-lg text-center w-15 font-medium text-gray-900 dark:text-white">You can update the details</p>

                        <div className='flex flex-col space-y-3'>
                            <label htmlFor="profile">
                            <img src={file || avatar} className="w-24 h-24 mb-3 m-auto rounded-full items-center shadow-lg  "  alt="profile "/>
                            </label>
                            <input onChange={onUpload} type="file" id="profile" name="profile"/>
                            
                            <div className='flex flex-row space-x-3'>
                            <input {...formik.getFieldProps('firstname')} type="text" name="firstname" id="firstname" className={styles.textbox} placeholder="FirstName" required/>
                            <input {...formik.getFieldProps('lastname')} type="text" name="lastname" id="lastname" className={styles.textbox}  placeholder="LastName" required/>
                            </div>

                            <div className='flex flex-row space-x-3'>
                            <input {...formik.getFieldProps('phone')} type="text" name="phone" id="phone" className={styles.textbox} placeholder="Phone" required/>
                            <input {...formik.getFieldProps('email')} type="email" name="email" id="email" className={styles.textbox}  placeholder="Email" required/>
                            </div>

                            <input {...formik.getFieldProps('address')} type="text" name="address" id="Address" className={styles.textbox}  placeholder="Address" required/>
                            <button type="submit" className={styles.btn}>
                            Update
                        </button>
                        <div className="text-sm font-medium text-gray-500 text-center dark:text-gray-300">come back later ? 
                            <Link to="/" className="text-blue-700 hover:underline dark:text-blue-500"> Logout</Link>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile ;