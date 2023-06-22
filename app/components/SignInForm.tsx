"use client";
import { useState, useEffect } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Input from "./inputs/Input";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signIn,useSession } from 'next-auth/react';



const SignInForm = () => {
  type Variant = "LOGIN" | "REGISTER";

  const [isLoading, setLoading] = useState(false);
  const [variant, setVariant] = useState<Variant>("LOGIN");

  const session = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  useEffect(()=>{
    if(session?.status === "authenticated"){
      router.push("/conversations")
    }
  },[session?.status,router])

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true)
    if(variant === 'REGISTER'){
    try{
      const response = await axios.post('http://localhost:3000/api/register',data)
      router.push("/conversations")
      console.log("res",response)
    }catch(err){
      toast("An error occured")
      console.log("err",err)
    }
    }
    if(variant === 'LOGIN'){
      // try{
      // let response = await signIn('credentials', {
      //   ...data,
      //   redirect: false
      // })
      // console.log("login res",response)
      // router.push("/conversations")
      // }catch(err){
      //   console.log("login-error",err)
      // }
      signIn('credentials', {
        ...data,
        redirect: false
      })
      .then((callback) => {
        console.log("callbacks",callback)
        if (callback?.error) {
          console.log('Invalid credentials!');
          setLoading(false);
          return
        }
        if (callback?.ok) {
          router.push('/conversations')
        }
      })
      .finally(() => setLoading(false))
    }
  }

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
      onSubmit={handleSubmit(onSubmit)}
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
          register={register}
          errors={errors}
          disabled={isLoading}
        />
  }
        <Input
          id="email"
          register={register}
          errors={errors}
          label="Email"
          required={true}
          disabled={isLoading}
        />
        <Input
          id="password"
          register={register}
          errors={errors}
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
