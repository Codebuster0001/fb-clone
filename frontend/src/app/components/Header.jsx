
import React from 'react'

const Header = () => {
  return (
    <header className='bg-white dark:bg-gray-800 text-foreground shadow-md h-16 fixed top-0 left-0 right-0 z-50 p-2'>

      <div className='mx-auto flex justify-between items-center p-2'>

        <div className='flex items-center gap-2 md:gap-4'>
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
         </div>
      </div>

    </header>
  )
}

export default Header;