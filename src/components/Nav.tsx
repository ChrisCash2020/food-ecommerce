import { FunctionComponent, useState } from 'react'
import { NavProps } from '../helpers/types'
import {
  ArrowRightOnRectangleIcon,
  Bars3BottomLeftIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import LoginElm from './LoginElm'

const Nav = ({ nav }: { nav: NavProps }) => {
  function open(name: string) {
    if (name == 'Contact us') {
      const container = document.getElementById('contact')
      console.log(container)
      container?.classList.remove('collapse')
    } else if (name == 'Cart') {
      const container = document.getElementById('cart')
      console.log(container)
      container?.classList.remove('collapse')
    }
  }
  return (
    <>
      <nav className='flex flex-row w-screen z-30 sticky top-0 bg-cardOverlay backdrop-blur-md p-5 md:px-4 lg:p-8 lg:px-16 justify-between h-max'>
        <button className='min-[914px]:hidden max-[330px]:scale-[0.8]'>
          <Bars3BottomLeftIcon className='h-6 w-6' aria-hidden='true' />
        </button>
        <Link
          to={'/'}
          className='flex flex-row popout max-[330px]:scale-[0.8] items-center'
        >
          <span className='sr-only'>{nav.title}</span>
          <img className='h-8 w-7 mr-3' src={nav.logo} alt='logo' />
          <p className='headingColor md:text-lg lg:text-xl font-bold'>
            {nav.title}
          </p>
        </Link>
        <div
          id='tabs'
          className='flex flex-row items-center gap-8 max-[945px]:hidden'
        >
          {nav.tabs.map((item) => (
            <Link
              // @ts-ignore
              to={item.href}
              key={item.name}
              className='text-base relative font-medium duration-100 transition-all ease-in-out text-gray-500 popout hover:text-[rgb(46,46,46)]  '
              onClick={() => open(item.name)}
            >
              {item.img ? (
                <>
                  {item.img}
                  <div className='absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center cursor-pointer'>
                    <p className='text-sm text-white font-semibold'>1</p>
                  </div>
                </>
              ) : (
                item.name
              )}
            </Link>
          ))}
        </div>
        <LoginElm auth={nav.auth} />
      </nav>
    </>
  )
}
export default Nav
