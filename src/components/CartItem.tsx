import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { FaTrash } from 'react-icons/fa'
import { Food } from '../helpers/types'

const CartItem = ({ food }: { food: Food }) => {
  return (
    <>
      {' '}
      <div className='w-full p-1 px-2 rounded-lg bg-[#2E3033] hover:shadow-md flex items-center justify-between gap-2 cursor-pointer '>
        <div className=' flex items-center  gap-2'>
          <img
            src={food.img}
            alt={food.alt}
            className='w-20 h-20 max-w-[60px] popout rounded-full object-contain'
          />
          <div className='flex flex-col gap-0 '>
            <p className='text-base text-gray-50'>{food.name}</p>
            <p className='text-sm block text-gray-300 font-semibold'>
              <span className='text-xs text-green-600'>$</span> {food.price}
            </p>
          </div>
        </div>
        <div className='group flex items-center gap-2  cursor-pointer'>
          <div className='text-gray-50'>
            <MinusIcon
              stroke='currentColor'
              fill='currentColor'
              height='1em'
              width='1em'
            />
          </div>
          <p className='text-sm text-gray-50 w-5 h-5 rounded-sm bg-cartBg flex items-center justify-center cursor-default'>
            1
          </p>
          <div className='text-gray-50'>
            <PlusIcon
              stroke='currentColor'
              fill='currentColor'
              height='1em'
              width='1em'
            />
          </div>
        </div>
        <div className='text-sm text-gray-50 w-6 h-6 rounded-lg bg-green-700 flex items-center justify-center'>
          <FaTrash
            stroke='currentColor'
            fill='currentColor'
            height='0.8em'
            width='0.8em'
          />
        </div>
      </div>
    </>
  )
}
export default CartItem
