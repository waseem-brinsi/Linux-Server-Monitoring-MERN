
import React from "react";
import { createBrowserRouter,RouterProvider  } from "react-router-dom";

/********* import all components  *****************/
import PageNotFound from './components/PageNotFound';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';
import Username from './components/Username';
/*************************************************/




/************** root routes **********************/
const router = createBrowserRouter([
  {
    path:'/',
    element : <Username></Username>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/Reset',
    element:<Reset></Reset>
  },
  {
    path:'/Recovery',
    element:<Recovery></Recovery>
  },
  {
    path:'/Profile',
    element:<Profile></Profile>
  },
  {
    path:'/Password',
    element:<Password></Password>
  },
  {
    path:'*',
    element:<PageNotFound></PageNotFound>
  }
])
/*************************************************/


function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
