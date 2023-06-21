'use client'
import Test from '@/components/Test'
import getCurrentUser from '../actions/getCurrentUser';
import { SessionProvider } from "next-auth/react"
import ShowUser from '@/components/ShowUser'
import Dummy from '@/components/Dummy';

export default async function  Home() {

  //const currentUser = await getCurrentUser();

  
  return (
    <div>      
      <Test />
      <ShowUser>
          <Dummy />
        </ShowUser>
    </div>
  )
}
