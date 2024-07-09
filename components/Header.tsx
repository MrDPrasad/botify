import Link from 'next/link'
import React from 'react'
import Avatar from './Avatar'
import { SignedIn, SignInButton ,UserButton,SignedOut} from '@clerk/nextjs'

function Header() {
  return (
    <header>
        <Link href="/" className='flex items-center text-4xl font-thin'>
    <Avatar seed="PAPAFAM Support Agent"/>
        <div className='space-y-1'>
        <h1>Botify</h1>
        <h2 className='text-sm'>Your Customisable AI chat Bot</h2>
        </div>
        </Link>
        <div className='flex items-center'>
            <SignedIn>
                <UserButton showName/>
            </SignedIn>

            <SignedOut>
                <SignInButton/>
            </SignedOut>

        </div>
      
    </header>
  )
}

export default Header
