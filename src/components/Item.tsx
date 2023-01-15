import { CardProps, Dish, Food } from '../helpers/types'
import { nanoid } from 'nanoid'
import { MdAddShoppingCart } from 'react-icons/md'

const Item = ({ item }: { item: Food }) => {
  return (
    <div
      key={nanoid()}
      className='w-[275px] min-w-[275px] md:w-[300px] md:min-w-[300px] my-2 md:my-5 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer'
    >
      <div className='w-full flex items-center justify-between'>
        <img
          className='w-40 h-40 md:w-48 md:h-40 popout -mt-8 object-contain cursor-pointer'
          alt={item.alt}
          src={item.img}
        />
        <div className='flex flex-col gap-2'>
          <div
            className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500 flex items-center justify-center cursor-pointer popout3 duration-100 transition-all ease-in-out'
            title='Add to cart'
          >
            <MdAddShoppingCart
              stroke='currentColor'
              fill='currentColor'
              className='text-slate-50 hover:text-white md:text-xl '
              height='1em'
              width='1em'
            />
            {/* <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              className='text-white opacity-95 hover:opacity-100 md:text-xl '
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path fill='none' d='M0 0h24v24H0zm18.31 6l-2.76 5z'></path>
              <path d='M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z'></path>
            </svg> */}
          </div>
        </div>
      </div>
      <div className='w-full flex items-end justify-end flex-col'>
        <p className='text-textColor font-semi-bold text-lg'>{item.name}</p>
        <p className='mt-1 text-sm text-gray-500'>{item.desc}</p>
        <div className='flex items-center justify-between gap-8 '>
          <p className='text-base headingColor font-semibold'>
            <span className='text-sm text-green-300'>$</span>
            {item.price}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Item
