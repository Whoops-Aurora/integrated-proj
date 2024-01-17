
const Register = () => {
  return (
    <div className="py-32">
      <form
        method="POST"
        action="http://localhost:4000/mypost"
        className=" mx-auto right-0 left-0 w-3/12 my-8  text-white bg-black  p-4 rounded-md bg-opacity-80"
      >
        <h1 className="text-3xl font-bold p-4">Register</h1>
        <input
          type="text"
          name="eventName"
          placeholder="eventname"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="text"
          name="emailAddress"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="text"
          name="usn"
          placeholder="USN"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {/* <p className="text-red-700 text-lg font-bold py-2">{errorMessage}</p> */}
        <button className="p-4 my-6 bg-red-700 w-full rounded-md">
          Register
        </button>
      </form>

    </div>
  );
};

export default Register;
