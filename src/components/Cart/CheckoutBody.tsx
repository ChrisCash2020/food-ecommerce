import { BsShieldLockFill } from 'react-icons/bs/index.js';
import { ImSpinner3 } from 'react-icons/im/index.js';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/hooks';
import { useState } from 'react';
import {
  getTotalInfo,
  updateCheckout,
  clearAllItems,
} from '../../helpers/slices/cart/cartSlice';

const CheckoutBody = () => {
  const totalInfo = useAppSelector(getTotalInfo);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const completePayment = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      dispatch(clearAllItems());
      dispatch(updateCheckout(false));
      toast.success('Order completed successfuly with payment. Thank you!', {
        position: 'top-center',
        autoClose: 1000,
      });
    }, 2500);
  };
  return (
    <div className='transition-all w-full h-full rounded-t-[2rem]  bg-[#282A2C] flex flex-col'>
      <div className='min-h-[50vh] mt-14'>
        <div className='w-full p-1 px-2 rounded-lg flex flex-col'>
          <div className='w-full flex flex-col mb-2'>
            <label
              htmlFor='name'
              className='font-bold text-sm mb-1 text-gray-100'
            >
              Name on Card
            </label>
            <input
              type='text'
              id='name'
              className='bg-[#2E3033] w-full px-3 py-2 mb-1 border-2 text-white border-gray-500 rounded-md focus:outline-none focus:border-green-500 focus:text-green-500 bg-cartItem transition-colors'
              placeholder='Enter your name'
              autoComplete='off'
            />
          </div>
          <div className='w-full flex flex-col mb-2'>
            <label
              htmlFor='number'
              className='font-bold text-sm mb-1 text-gray-100'
            >
              Card Number
            </label>
            <input
              type='text'
              id='number'
              className='bg-[#2E3033] w-full px-3 py-2 mb-1 border-2 text-white border-gray-500 rounded-md focus:outline-none focus:border-green-500 focus:text-green-500 bg-cartItem transition-colors'
              placeholder='Enter your number'
              autoComplete='off'
            />
          </div>
          <div className='w-full flex justify-between gap-1 mb-2'>
            <div className='flex flex-col '>
              <label
                htmlFor='number'
                className='font-bold text-sm mb-1 text-gray-100'
              >
                Expiry Date
              </label>
              <input
                type='text'
                id='text'
                className='bg-[#2E3033] w-full px-3 py-2 mb-1 border-2 text-white border-gray-500 rounded-md focus:outline-none focus:border-green-500 focus:text-green-500 bg-cartItem transition-colors'
                placeholder='MM/YY'
                autoComplete='off'
              />
            </div>
            <div className='flex flex-col '>
              <label
                htmlFor='number'
                className='font-bold text-sm mb-1 text-gray-100'
              >
                CVV
              </label>
              <input
                type='text'
                id='password'
                className='bg-[#2E3033] w-full px-3 py-2 mb-1 border-2 text-white border-gray-500 rounded-md focus:outline-none focus:border-green-500 focus:text-green-500 bg-cartItem transition-colors'
                placeholder='CVV'
                autoComplete='off'
              />
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center my-2'>
          <p className='text-gray-300'>
            Amount Due:{' '}
            <span className='font-bold text-white'>$ {totalInfo.total}</span>{' '}
          </p>
        </div>
        <div className='w-full flex items-center justify-center mt-4'>
          <button
            onClick={completePayment}
            className='flex items-center justify-center gap-2 w-[90%] p-2 rounded-full bg-gradient-to-tr from-green-400 to-green-600 hover:from-green-600 hover:to-green-400 transition-all duration-75 ease-in-out text-gray-50 text-lg my-2 hover:shadow-lg'
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z'></path>
            </svg>
            {!loading ? (
              'PAY NOW'
            ) : (
              <ImSpinner3 className='animate animate-spin' />
            )}
          </button>
        </div>
      </div>
      <div className=' bg-[#2E3033] w-full flex-1 mt-2 md:mt-0 rounded bg-cartItem rounded-t-[2rem] px-8 py-2 flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center gap-2'>
          <div className='flex flex-col items-center'>
            <p className='text-white my-1 flex flex-row items-center justify-center gap-1'>
              <BsShieldLockFill className='h-5 w-5' />
              Secured by{' '}
              <span className='font-bold text-green-600'>CASHDEV</span>
            </p>
            <p className='text-xs text-white'>
              form is fake no data is being recorded
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBody;
