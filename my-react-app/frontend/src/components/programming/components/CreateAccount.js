import React from "react";


const CreateAccount = () => {
  return (
    <div>
      <form
      method="POST"
      action="http://localhost:4000/register"
        className="  mx-auto right-0 left-0 w-3/12 my-36  text-white bg-black  p-4 rounded-md bg-opacity-80"
      >
        <h1 className="text-3xl font-bold p-4">
          Sign Up
        </h1>
        
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        
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
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-md"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
