import React from 'react'
import SignInFormClient from '@/features/auth/components/signin-form-client'

const SignInPage = () => {
  return (
    <div className='flex flex-col items-center space-y-6 justify-center min-h-screen bg-zinc-800'>
    <img src={"/logo.svg"} alt='Logo Image' height={300}  width={300}/>
    <SignInFormClient/>
    </div>
  )
}

export default SignInPage