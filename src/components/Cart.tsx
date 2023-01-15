import {
  ArrowRightOnRectangleIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { BsArrowLeft, BsTrashFill } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'

import { cartIcon } from '../assets/assests'
import cartLogo from '../assets/cartLogo.svg'
import { Food } from '../helpers/types'
import CartItem from './CartItem'
import _404 from './_404'
import { nanoid } from 'nanoid'
const Cart = ({ foods, total }: { foods: Food[]; total: number }) => {
  function close() {
    const container = document.getElementById('cart')
    container?.classList.add('collapse')
  }
  const [fee, setFee] = useState((total * 0.2).toFixed(2))
  return (
    <>
      <div className='w-full flex items-center bg-white justify-between px-4 py-2 cursor-pointer'>
        <button onClick={close}>
          <BsArrowLeft
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            className='text-xl '
            height='9em'
            width='1em'
          />
        </button>
        <div className='flex items-center justify-center gap-2'>
          Cart
          {cartIcon}
        </div>
        <a href='/login'>
          <p className='popout flex items-center popout2 justify-center gap-2 p-1 px-2 my-2 bg-cardOverlay rounded-md hover:shadow-sm text-textColor text-base'>
            <button>
              <ArrowRightOnRectangleIcon
                className='h-6 w-6'
                aria-hidden='true'
              />
            </button>{' '}
            Login to cart
          </p>
        </a>
        <p className='popout2 flex items-center justify-center gap-2 p-1 px-2 my-2 bg-cardOverlay rounded-md hover:shadow-sm text-textColor text-base'>
          clear{' '}
          <button>
            <ArrowRightOnRectangleIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </p>
        <button></button>
      </div>
      <div className='h-full w-full flex-1 flex-col flex items-center justify-center'>
        {/* <div className='flex-col flex items-center justify-center px-5'>
          <_404 img={cartLogo} alt='Empty Cart' text='Cart is empty' />
        </div> */}
        <div className='w-full h-full rounded-t-[2rem]  bg-[#282A2C] flex flex-col'>
          <div className='w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-hidden'>
            {foods.map((food) => (
              <CartItem key={nanoid()} food={food} />
            ))}
          </div>
          <div className='w-full mt-2 md:mt-0 flex-1 rounded bg-[#2E3033] rounded-t-[2rem] px-8 py-2 flex flex-col items-center justify-evenly'>
            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-400 text-base md:text-lg '>Sub Total</p>
              <p className='text-gray-400 text-base md:text-lg'>-</p>
              <p className='text-gray-400 text-base md:text-lg '>
                <span className='text-sm text-green-600'>$</span> {total}
              </p>
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-400 text-base md:text-lg '>Delivery</p>
              <p className='text-gray-400 text-base md:text-lg'>-</p>
              <p className='text-gray-400 text-base md:text-lg '>
                <span className='text-sm text-green-600'>$</span> {fee}
              </p>
            </div>
            <div className='w-full border-b border-gray-600 my-'></div>
            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-50 text-base md:text-lg uppercase'>
                Total
              </p>
              <p className='text-gray-50 text-base md:text-lg'>-</p>
              <p className='text-gray-50 text-base md:text-lg '>
                <span className='text-sm text-green-600'>$</span> {total + +fee}
              </p>
            </div>
            <button className='w-full p-2 rounded-full bg-gradient-to-tr from-green-400 to-green-600 text-gray-50 text-lg my-2 hover:shadow-lg'>
              Checkout <span className='ml-2 text-gray-600'>₵</span>{' '}
              {total + fee}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Cart
