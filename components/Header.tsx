import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
        <Link href="/">
    {/*Avatar */}
        <div>
        <h1>Botify</h1>
        <h2 className='text-sm'>Your Customisable AI chat Bot</h2>
        </div>
        </Link>
      
    </header>
  )
}

export default Header
