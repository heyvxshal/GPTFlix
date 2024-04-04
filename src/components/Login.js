import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg
"
          alt="background"
        />
      </div>
      <form className="absolute p-12 bg-black w-4/12 mx-auto right-0 left-0 my-36 text-white rounded-lg bg-opacity-90">
        <h1 className="text-4xl font-semibold py-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-transparent border border-neutral-500 rounded-md"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-transparent border border-neutral-500 rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-transparent border border-neutral-500 rounded-md"
        />
        <button className="py-3 my-6 bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-1 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered?Sign In now"}
        </p>
      </form>
    </>
  );
};

export default Login;
