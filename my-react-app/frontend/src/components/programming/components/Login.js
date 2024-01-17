import React from "react";

const Login = () => {

  return (
    <div className="py-8">
      

      <form
      method="POST"
      action="http://localhost:4000/login"
        className="absolute  mx-auto right-0 left-0 w-3/12 mb-20 mt-32  text-white bg-black  p-4 rounded-md bg-opacity-80"
      >
         
        <h1 className="text-3xl font-bold p-4">
          Sign In
        </h1>
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {/* <p className="text-red-700 text-lg font-bold py-2">{errorMessage}</p> */}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-md"
        >
          Sign In
        </button>
      </form>

    </div>
  );
};

export default Login;
