import { BsGithub, BsGoogle } from "react-icons/bs";

const SignIn = () => {
  return (
    <div className="mt-8">
      <h1 className="py-4 text-lg">Sign in with Messenger</h1>

      <form
        className="        
        bg-white
          py-4
          px-6
          shadow
          rounded-lg
          sm:px-6"
      >
        <div className="mt-2">
          <label for="username" className="block">
            Username
          </label>
          <input id="username" type="text" className="w-full py-2 mt-2" />
        </div>
        <div className="mt-2">
          <label for="password" className="block">
            Password
          </label>
          <input id="pasword" type="password" className="w-full py-2 mt-2" />
        </div>
        <div className="mt-4">
          {" "}
          <button
            type="submmit"
            className="w-full py-2 rounded-lg text-white bg-blue-400"
          >
            Sign In
          </button>
        </div>
        <div className="my-2 flex justify-center">
          {" "}
          <span className="bg-white px-2 text-gray-500 ">or continue with</span>
        </div>

        <div className="flex items-center justify-around">
          <span className="border border-gray-300 px-12 py-2 rounded-md">
            <BsGithub />
          </span>
          <span className="border border-gray-300 px-12 py-2 rounded-md">
            <BsGoogle />
          </span>
        </div>
        <div className="my-2 flex justify-center">
          {" "}
          <span className="bg-white px-2 text-gray-500 ">
            new to messenger? Create an account
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
