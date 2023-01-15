import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { ModalProps, NavProps } from '../helpers/types'
// import {
//   ArrowRightOnRectangleIcon,
//   Bars3BottomLeftIcon,
// } from '@heroicons/react/24/outline'
// import { Link } from 'react-router-dom'

const Modal = ({ nav }: { nav: NavProps }) => {
  const cart = nav.tabs[4].img
  return (
    <div className='flex absolute flex-col bg-cardOverlay backdrop-blur-sm items-start justify-start gap-16 w-screen h-screen  overflow-y-hidden  z-50 overflow-hidden '>
      <div className='flex items-center justify-between w-screen h-24 left-0  px-10'>
        <div className='relative flex items-center justify-center text-textColor'>
          <img className='h-10 w-10' src={cart} alt='cart' />

          <div className='absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-sm text-white font-semibold'>0</p>
          </div>
        </div>
        <div className='relative flex items-center justify-center text-textColor'>
          <XMarkIcon className='h-10 w-10' />
        </div>
      </div>
      <div className='flex items-center justify-center w-full  h-72 gap-10 flex-col'>
        {nav.tabs.map((item) => (
          <>
            {!item.img && (
              <Link
                to={item.href || ''}
                key={item.name}
                className='text-base cursor-pointer duration-100 transition-all ease-in-out px-10 text-gray-500 hover:text-green-600'
              >
                {item.name}
              </Link>
            )}
          </>
        ))}
      </div>
      <a className='flex items-center  justify-center w-full' href='/'>
        <div className='flex items-center gap-2 cursor-pointer'>
          <img src={nav.logo} alt='Logo' className='w-16 object-cover' />
          <p className='headingColor text-3xl font-bold'>{nav.title}</p>
        </div>
      </a>
    </div>
  )
}
export default Modal
