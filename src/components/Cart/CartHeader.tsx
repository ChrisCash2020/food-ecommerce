import { BiRefresh } from 'react-icons/bi/index.js';
import {
  BsArrowLeft,
  BsShieldCheck,
  BsShieldLock,
  BsShieldLockFill,
} from 'react-icons/bs/index.js';
import { HiArrowRightOnRectangle } from 'react-icons/hi2/index.js';
import { Link } from 'react-router-dom';
import { cartIcon } from '../../assets/assests';
import { useAppDispatch } from '../../helpers/hooks/hooks';
import {
  clearAllItems,
  updateCheckout,
} from '../../helpers/slices/cart/cartSlice';
const CartHeader = ({
  auth,
  checkout,
}: {
  auth: boolean;
  checkout: boolean;
}) => {
  const dispatch = useAppDispatch();
  function close() {
    console.log('clicked');
    const container = document.getElementById('cart');
    container?.classList.add('collapse');
  }
  return (
    <div className='w-full flex items-center bg-white justify-between pl-4 py-2 cursor-pointer'>
      {/* button enables user to continue shopping instead of completing purchas */}
      <button
        onClick={() => (checkout ? dispatch(updateCheckout(false)) : close())}
      >
        <BsArrowLeft
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          className='text-xl '
          height='9em'
          width='1em'
        />
      </button>
      {checkout ? (
        <>
          <div className='flex w-[100%] items-center justify-center  gap-2'>
            Secured Payment
          </div>
          <button className='flex items-center justify-center gap-2 p-1 px-2 my-2 bg-cardOverlay rounded-md  text-textColor text-base'>
            <BsShieldLockFill className='h-5 w-5 text-green-700' />
            <BsShieldCheck className='h-5 w-5 text-green-700 ' />
          </button>
        </>
      ) : (
        <>
          <div className='flex w-[100%] items-center justify-center  gap-2'>
            <span className='text-green-600'>{cartIcon}</span> Cart
          </div>
          <>
            {!auth ? (
              <Link
                to='/login'
                className='w-full flex items-center hover:scale-[0.9] justify-center gap-2 p-1 px-2 my-2 bg-cardOverlay rounded-md hover:shadow-sm text-textColor text-base'
              >
                <button>
                  <HiArrowRightOnRectangle
                    className='h-6 w-6'
                    aria-hidden='true'
                  />
                </button>{' '}
                Login to cart
              </Link>
            ) : (
              <button
                onClick={() => dispatch(clearAllItems())}
                className='flex items-center justify-center gap-2 p-1 px-2 my-2 bg-cardOverlay rounded-md  text-textColor text-base'
              >
                clear <BiRefresh className='text-green-400' />
              </button>
            )}
          </>
        </>
      )}
    </div>
  );
};

export default CartHeader;
