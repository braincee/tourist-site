import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
       <header> 
        <div className="topNav">
          <Image width={100} height={100} src={'/image/tourist-logo.png'} alt='logo'/>
         <nav>
          <ul>
            <li><Link href='/' passHref>Home</Link></li>
            <li><Link href='/tourist-sites' passHref>Tourists</Link></li>
            <li><Link href='/about-us' passHref>About Us</Link></li>
          </ul>
        </nav>
        </div>
        <h1>Tourist Attractions in Ghana</h1>
      </header>
  )
}

export default Header