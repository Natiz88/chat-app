'use client'

import React from 'react';
import { signOut } from 'next-auth/react';
import { useSession } from "next-auth/react";

const Conversations = () => {
  const {data : session,status} = useSession()
  return (
    <div className="w-full hidden lg:block lg:pl-80 ">Conversations {session?.user?.email} <button onClick={()=>signOut({callbackUrl:"http://localhost:3000"})}>Logout</button></div>
  )
}

export default Conversations;