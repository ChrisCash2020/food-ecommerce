import { nanoid } from 'nanoid';
import CartItem from './CartItem';
import _404 from '../Other/_404';
import cartLogo from '../../assets/cartLogo.svg';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/hooks';
import {
  getCart,
  getTotalInfo,
  updateCheckout,
} from '../../helpers/slices/cart/cartSlice';
const CartBody = () => {
  const cartItems = useAppSelector(getCart);
  const totalInfo = useAppSelector(getTotalInfo);
  const dispatch = useAppDispatch();
  return (
    <>
      {cartItems.length < 1 ? (
        <div className=' transition-all flex-col flex h-full items-center justify-center px-5'>
          <_404 img={cartLogo} alt='Empty Cart' text='Cart is empty' />
        </div>
      ) : (
        <div className='transition-all h-full w-full flex-1 flex-col flex items-center justify-center'>
          <div className='w-full h-full rounded-t-[2rem]  bg-[#282A2C] flex flex-col'>
            <div className='w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll cart-scrollbar'>
              {cartItems.map((item) => (
                <CartItem key={nanoid()} food={item} />
              ))}
            </div>
            <div className='w-full mt-2 md:mt-0 flex-1 rounded bg-[#2E3033] rounded-t-[2rem] px-8 py-2 flex flex-col items-center justify-evenly'>
              <div className='w-full flex items-center justify-between'>
                <p className='text-gray-400 text-base md:text-lg '>Subtotal</p>
                <p className='text-gray-400 text-base md:text-lg'>-</p>
                <p className='text-gray-400 text-base md:text-lg '>
                  <span className='text-sm text-green-600'>$</span>{' '}
                  {totalInfo.subTotal}
                </p>
              </div>
              <div className='w-full flex items-center justify-between'>
                <p className='text-gray-400 text-base md:text-lg '>Delivery</p>
                <p className='text-gray-400 text-base md:text-lg'>-</p>
                <p className='text-gray-400 text-base md:text-lg '>
                  <span className='text-sm text-green-600'>$</span>{' '}
                  {totalInfo.fee}
                </p>
              </div>
              <div className='w-full border-b border-gray-600 my-'></div>
              <div className='w-full flex items-center justify-between'>
                <p className='text-gray-50 text-base md:text-lg uppercase'>
                  Total
                </p>
                <p className='text-gray-50 text-base md:text-lg'>-</p>
                <p className='text-gray-50 text-base md:text-lg '>
                  <span className='text-sm text-green-600'>$</span>{' '}
                  {totalInfo.total}
                </p>
              </div>
              <button
                onClick={() => dispatch(updateCheckout(true))}
                className='w-full p-2 rounded-full bg-gradient-to-tr from-green-400 to-green-600 text-gray-50 text-lg my-2 hover:shadow-lg'
              >
                Checkout <span className='ml-2 text-gray-600'>$</span>{' '}
                {totalInfo.total}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartBody;
