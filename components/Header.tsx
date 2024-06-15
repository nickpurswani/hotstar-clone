import Link from 'next/link';
import React from 'react';
import Image from"next/image";
import { ThemeToggler } from './ThemeToggler';
import SearchInput from './SearchInput';
import GenreDropdown from './GenreDropdown';
function Header() {
  return (
    <header className='fixed w-full z-20 top-0 flex items-center justify-between
    p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900
    '>
      <Link href="/" className='mr-10'>
    <Image src="https://i.ibb.co/rZrpr4d/58428d79a6515b1e0ad75ab2.png" alt="Disney Logo"
      width={120}
      height={100}
      className='cursor-pointer invert-0 dark:invert'
        >

</Image>

      </Link>
      <div className='flex space-x-2'
      >
         <GenreDropdown/> 
        <SearchInput/>
        <ThemeToggler/>
      </div>
    </header>
  )
}

export default Header

