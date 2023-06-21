'use client';
import { signIn } from 'next-auth/react';
import { signOut } from "next-auth/react";
import getCurrentUser from '../actions/getCurrentUser';

const Test = async () => {

    // const user = await getCurrentUser();
    // console.log(user);    

    return (
        <div>
      <button 
        onClick={() => signIn('google')}
        className='
          bg-blue-500
          rounded-md
          p-2
          m-2
          text-white/50
          hover:bg-blue-600
        '
      >
        google
      </button>


      <button 
        onClick={() => signOut()}
        className='
          bg-blue-500
          rounded-md
          p-2
          m-2
          text-white/50
          hover:bg-blue-600
        '
      >
        sign out
      </button>      
        </div>
    );
}

export default Test;