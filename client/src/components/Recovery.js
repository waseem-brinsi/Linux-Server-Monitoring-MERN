import React from 'react';
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "./helper/validate";

function Recovery () {

    const formik = useFormik(
        {
            initialValues : {
                password:''
            },
            validate : passwordValidate, 
            validateOnBlur:false,
            validateOnChange:false,
            onSubmit : async (values)=>{
                console.log(values)
            }
        }
    )
    
    return (
        <div className='container m-auto '>
            <Toaster position='top-center' reverseOrder='false'></Toaster>
            <div className='flex justify-center h-screen'>
                <div className=" w-full max-w-sm p-4 m-auto  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-5 " onSubmit={formik.handleSubmit}  action="#">
                            <h5 className="text-2xl font-medium text-center text-gray-900 dark:text-white">Recovery</h5>
                            <p className="text-lg text-center w-15 font-medium text-gray-900 dark:text-white">Enter OTP to recover password</p>
                        
                            <div className='flex flex-col space-y-4'>
                                <span className='text-xs mx- text-center text-gray-900  dark:text-white'>Enter 6 digit OTP sent to your email address. </span>
                                <input {...formik.getFieldProps('password')} type="password" name="password" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="OTP" required/>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Recover       
                            </button>
                            <div className="text-sm font-medium text-gray-500 text-center dark:text-gray-300"> Can't get OTP? 
                                <Link to="/Recovery" className="text-blue-700 hover:underline dark:text-blue-500"> Resend</Link>
                            </div>
                            </div>

                        </form>
                </div>
            </div>
        </div>
     );
}

export default Recovery ;