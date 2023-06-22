import Image from 'next/image';
import SignInForm from './components/SignInForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  return (
    <>
    <div className="w-full min-h-full bg-gray-100 flex flex-col items-center justify-center">
          <Image
      src='/images/messenger.png'
      width={60}
      height={60}
      alt="icon"
    />
          <h1 className="pb-4 font-bold text-lg">
            Sign in with Messenger
          </h1>
      <SignInForm />
      <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />    </div>
        </>
  )
}