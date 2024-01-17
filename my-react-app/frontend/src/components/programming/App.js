//NOTE : Never ever forget to use return after using map

import React from "react";
// import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import Home from "./components/Homee.js";
// import Body from "./components/Body.js";
import Footer from "./components/Footer";
import Question from "./components/Questions.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
// import CreateAccount from "./components/createAccount.js";
import SignUp from "./components/SignUp.js";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App=()=>{
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/questions",
          element:<Question/>
        },  
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/create-account",
          element:<SignUp/>
        }  
       
      ],
     
    },
   
    
  ])
  return(
<RouterProvider router={appRouter} />
  )
}
export default App;


