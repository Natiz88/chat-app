"use client";
import { useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Input from "./inputs/Input";

const SignInForm = () => {
  type Variant = "LOGIN" | "REGISTER";

  const [isLoading, setLoading] = useState(false);
  const [variant, setVariant] = useState<Variant>("LOGIN");

  const toggleVariant = () => {
    if(variant === 'LOGIN'){
      setVariant('REGISTER')
    }
    if(variant === 'REGISTER'){
      setVariant('LOGIN')
    }
  }

  return (
    <>
      <form
        className="        
        bg-white
          py-4
          px-6
          shadow-xl
          rounded-lg
          sm:px-6"
      >
        { variant === "REGISTER" && 
        <Input
          id="name"
          label="Name"
          required={true}
          disabled={isLoading}
        />
  }
        <Input
          id="username"
          label="Username"
          required={true}
          disabled={isLoading}
        />
        <Input
          id="password"
          label="Password"
          required={true}
          type="password"
          disabled={isLoading}
        />
        <div className="mt-4">
          {" "}
          <button
            type="submit"
            className="w-full py-2 rounded-lg text-white bg-blue-400"
          >
           {variant === 'LOGIN'?'Sign in':'Register'}
          </button>
        </div>
        <div className="my-2 flex justify-center">
          {" "}
          <span className="bg-white px-2 text-gray-500 ">or continue with</span>
        </div>

        <div className="flex items-center justify-around">
          <span className="border border-gray-300 px-12 py-2 rounded-md cursor-pointer">
            <BsGithub />
          </span>
          <span className="border border-gray-300 px-12 py-2 rounded-md cursor-pointer">
            <BsGoogle />
          </span>
        </div>
        <div className="my-2 flex justify-center">
          {" "}
          <span className="bg-white px-2 text-gray-500 ">
            new to messenger? <button onClick={toggleVariant}>{variant === 'LOGIN'?'Create an account':'Login to your account'}</button>
          </span>
        </div>
      </form>
    </>
  );
};

export default SignInForm;
