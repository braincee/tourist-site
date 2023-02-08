import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseCircleFill } from 'react-icons/ri';

const Navbar = () => {

  const [ nav, setNav ] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  const router = useRouter();

  const checkActive = (route) => {
    return router.pathname === route ? true : false;
  };
 
  return (
        <div className="navbar"> 
        <div className='top'>
        <div className="topNav">
          <Image width={200} height={50} src={'/image/visitghana.png'} alt='logo'/>
         <nav>
          <ul className='right-nav'>
            <li><Link href='/' passHref className={checkActive('/') ? 'active' : ''}>Home</Link></li>
            <li><Link href='/touristSites' className={checkActive('/touristSites') ? 'active' : ''} passHref>Cities</Link></li>
            <li><Link href='/touristSites/all' className={checkActive('/touristSites/all') ? 'active' : ''} passHref>Tourist Sites</Link></li>
            <li><Link href='/about-us' className={checkActive('/about-us') ? 'active' : ''} passHref>History</Link></li>
          </ul>
          <div onClick={handleNav} className="menu">
            <GiHamburgerMenu size={30}/>
          </div>
        </nav>
        </div>
        </div>
        <div className={nav ? 'drawer' : 'drawer-1'}>
          <div className='close' onClick={handleNav}>
            <RiCloseCircleFill size={50} />
          </div>
           <ul className='menu-links'>
            <li onClick={() => setNav(true)}><Link href='/'>Home</Link></li>
            <li onClick={() => setNav(true)}><Link href='/touristSites'>Cities</Link></li>
            <li onClick={() => setNav(true)}><Link href='/touristSites/all'>Tourist Sites</Link></li>
            <li onClick={() => setNav(true)}><Link href='/about-us'>History</Link></li>
           </ul>
        </div>
      </div>
  )
}

export default Navbar