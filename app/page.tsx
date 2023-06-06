import Image from 'next/image';
import SignInForm from './components/SignInForm';

export default function Home() {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center">
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
    </div>
  )
}