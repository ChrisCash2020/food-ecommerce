import { NavProps } from '../../helpers/other/types';
import { Link } from 'react-router-dom';
import LoginElm from '../Auth/LoginElm';
import { toggleNav } from '../../helpers/slices/other/modalSlice';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/hooks';
import { getTotalQty } from '../../helpers/slices/cart/cartSlice';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2/index.js';

const Nav = ({ nav }: { nav: NavProps }) => {
  const qtyTotal = useAppSelector(getTotalQty);
  const dispatch = useAppDispatch();
  function open(name: string) {
    if (name == 'Contact us') {
      const container = document.getElementById('contact');
      // console.log(container)
      container?.classList.remove('collapse');
    } else if (name == 'Cart') {
      const container = document.getElementById('cart');
      // console.log(container)
      container?.classList.remove('collapse');
    }
  }
  return (
    <>
      <nav className='flex flex-row w-screen z-30 sticky top-0 bg-cardOverlay backdrop-blur-md p-5 md:px-4 lg:p-8 lg:px-16 justify-between h-max'>
        <button
          onClick={() => dispatch(toggleNav(true))}
          className='min-[945px]:hidden max-[330px]:scale-[0.8]'
        >
          <HiOutlineBars3BottomLeft className='h-6 w-6' aria-hidden='true' />
        </button>
        <Link
          to={'/'}
          className='flex flex-row hover:scale-[1.1] max-[330px]:scale-[0.8] items-center'
        >
          <span className='sr-only'>{nav.title}</span>
          <img
            loading='lazy'
            className='h-8 w-7 mr-3'
            src={nav.logo}
            alt='logo'
          />
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
              className='text-base relative font-medium duration-100 transition-all ease-in-out text-gray-500 hover:scale-[1.1] hover:text-[rgb(46,46,46)]  '
              onClick={
                item.name == 'Cart'
                  ? () => open('Cart')
                  : item.name == 'Contact us'
                  ? () => open('Contact us')
                  : undefined
              }
            >
              {item.img ? (
                <>
                  {item.img}
                  <div className='absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center cursor-pointer'>
                    <p className='text-sm text-white font-semibold'>
                      {qtyTotal ? qtyTotal : 0}
                    </p>
                  </div>
                </>
              ) : (
                item.name
              )}
            </Link>
          ))}
        </div>
        <LoginElm />
      </nav>
    </>
  );
};
export default Nav;
