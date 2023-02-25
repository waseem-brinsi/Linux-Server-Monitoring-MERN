import React from 'react';
import { Link } from "react-router-dom";
import avatar from '../assets/profile-picture-3.jpg'
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

function Username () {

    const formik = useFormik(
        {
            initialValues : {
                username:''
            },
            validateOnBlur:false,
            validateOnChange:false,
            onSubmit : async (values)=>{
                console.log(values)
            }
        }
    )



    return (
        <div className='container m-auto '>
            <div className='flex justify-center h-screen'>
                <div className=" w-full max-w-sm p-4 m-auto  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-5 " onSubmit={formik.handleSubmit}  action="#">
                            <h5 className="text-2xl font-medium text-center text-gray-900 dark:text-white">Welcome in Our platform</h5>
                            <p className="text-lg text-center w-15 font-medium text-gray-900 dark:text-white">Explore More by connecting with us</p>
                            <img className="w-24 h-24 mb-3 m-auto rounded-full items-center shadow-lg  " src={avatar} alt="profile "/>
                            <div>
                                <input {...formik.getFieldProps('username')} type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Username" required/>
                            </div>

                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Let's Go
                            </button>
                            
                            <div className="text-sm font-medium text-gray-500 text-center dark:text-gray-300">
                                Not registered? 
                                <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                            </div>
                        </form>
                </div>
            </div>
        </div>
     );
}

export default Username ;