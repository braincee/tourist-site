import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

  const router = useRouter();

  const checkActive = (route) => {
    return router.pathname === route ? true : false;
  };
 
  return (
        <div className="navbar"> 
        <div className='top'>
        <div className="topNav">
          <Image width={200} height={100} src={'/image/ghanalogo.png'} alt='logo'/>
         <nav>
          <ul className='right-nav'>
            <li><Link href='/' passHref className={checkActive('/') ? 'active' : ''}>Home</Link></li>
            <li><Link href='/tourist-sites' className={checkActive('/tourist-sites') ? 'active' : ''}passHref>Cities</Link></li>
            <li><Link href='/about-us' className={checkActive('/about-us') ? 'active' : ''}passHref>History</Link></li>
          </ul>
        </nav>
        </div>
        <h1>Tourist Attractions in Ghana</h1>
        </div>
      </div>
  )
}

export default Navbar