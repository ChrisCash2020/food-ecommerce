import { FaTrash } from 'react-icons/fa/index.js';
import { useAppDispatch } from '../../helpers/hooks/hooks';
import {
  decreaseItemQty,
  increaseItemQty,
  removeItem,
} from '../../helpers/slices/cart/cartSlice';
import { Food } from '../../helpers/other/types';
import { HiMinus, HiPlus } from 'react-icons/hi2/index.js';
const CartItem = ({ food }: { food: Food }) => {
  const dispatch = useAppDispatch();
  // basic cart functionality
  // the cart slice as the nessasary functions to alter the product qty or state in regards to the cart

  // the database id isn't a accurate way to know which item to alter so the index of the item is used instead
  return (
    <>
      {' '}
      <div className='w-full p-1 px-2 rounded-lg bg-[#2E3033] hover:shadow-md flex items-center justify-between gap-2 cursor-pointer '>
        <div className=' flex items-center  gap-2'>
          <img
            src={food.img}
            alt={food.alt}
            className='w-20 h-20 max-w-[60px] hover:scale-[1.1] rounded-full object-contain'
          />
          <div className='flex flex-col gap-0 '>
            <p className='text-base text-gray-50'>{food.title}</p>
            <p className='text-sm block text-gray-300 font-semibold'>
              <span className='text-xs text-green-600'>$</span>{' '}
              {food.price * food.qty}
            </p>
          </div>
        </div>
        <div className='group flex items-center gap-2  cursor-pointer'>
          <button
            onClick={() => {
              dispatch(decreaseItemQty(food.index));
            }}
            className='text-gray-50'
          >
            <HiMinus
              stroke='currentColor'
              fill='currentColor'
              height='1em'
              width='1em'
            />
          </button>
          <p className='text-sm text-gray-50 w-5 h-5 rounded-sm bg-cartBg flex items-center justify-center cursor-default'>
            {food.qty}
          </p>
          <button
            onClick={() => {
              dispatch(increaseItemQty(food.index));
            }}
            className='text-gray-50'
          >
            <HiPlus
              stroke='currentColor'
              fill='currentColor'
              height='1em'
              width='1em'
            />
          </button>
        </div>
        <button
          onClick={() => dispatch(removeItem(food.index))}
          className='text-sm text-gray-50 w-6 h-6 rounded-lg bg-green-700 flex group relative items-center justify-center'
        >
          <FaTrash
            stroke='currentColor'
            fill='currentColor'
            height='0.8em'
            width='0.8em'
          />
          <div className='absolute bottom-0  flex-col items-center mb-6 group-hover:flex'>
            <span className='relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg'>
              A top aligned tooltip.
            </span>
            <div className='w-3 h-3 -mt-2 rotate-45 bg-black'></div>
          </div>
        </button>
      </div>
    </>
  );
};
export default CartItem;
