import { Food } from '../../helpers/other/types';
import { nanoid } from 'nanoid';
import { MdAddShoppingCart } from 'react-icons/md/index.js';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/hooks';
import { addItem } from '../../helpers/slices/cart/cartSlice';
import { toast } from 'react-toastify';

const Item = ({ item }: { item: Food }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  return (
    <button
      key={nanoid()}
      className='w-[275px] select-none min-w-[275px] md:w-[300px] md:min-w-[300px] my-2 md:my-5 h-auto max-h-[245px] bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg cursor-pointer'
    >
      <div className='w-full flex items-center justify-between'>
        <img
          loading='lazy'
          className='w-40 transition-all z-[100] h-40 hover:scale-[1.2] md:w-48 md:h-40 -mt-8 object-contain cursor-pointer'
          alt={item.alt}
          src={item.img}
        />
        <div className='flex flex-col gap-2'>
          <div
            className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500 flex items-center justify-center cursor-pointer hover:scale-[1.2] duration-100 transition-all ease-in-out'
            title='Add to cart'
          >
            <button
              // add to cart button depends on user authentication
              onClick={() =>
                user
                  ? dispatch(addItem(item.index))
                  : toast.error('Please login to add to cart')
              }
            >
              {' '}
              <MdAddShoppingCart
                stroke='currentColor'
                fill='currentColor'
                className='text-slate-50 hover:text-white md:text-xl '
                height='1em'
                width='1em'
              />
            </button>
          </div>
        </div>
      </div>
      <div className='w-full flex items-end justify-end flex-col'>
        <p className='text-textColor font-semi-bold text-lg'>{item.title}</p>
        <p className='mt-1 text-sm min-h-[20px] text-gray-500'>{item.detail}</p>
        <div className='flex items-center justify-between gap-8 '>
          <p className='text-base headingColor font-semibold'>
            <span className='text-sm text-green-300'>$</span>
            {item.price}
          </p>
        </div>
      </div>
    </button>
  );
};
export default Item;
