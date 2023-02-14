import { Link } from 'react-router-dom';
import { HiOutlineXMark } from 'react-icons/hi2/index.js';
import { cartIcon } from '../../assets/assests';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/hooks';
import { getTotalQty } from '../../helpers/slices/cart/cartSlice';
import { toggleNav } from '../../helpers/slices/other/modalSlice';
import { NavProps } from '../../helpers/other/types';

const NavModal = ({ nav }: { nav: NavProps }) => {
  // the qty of items tracker
  const qtyTotal = useAppSelector(getTotalQty);

  const dispatch = useAppDispatch();
  // function for the special sidebars
  function open(name: string) {
    if (name == 'Contact us') {
      const container = document.getElementById('contact');
      container?.classList.remove('collapse');
    } else if (name == 'Cart') {
      const container = document.getElementById('cart');
      container?.classList.remove('collapse');
    }
  }
  return (
    <div className='flex fixed flex-col bg-cardOverlay backdrop-blur-sm items-start justify-start gap-16 w-screen min-h-screen  overflow-y-hidden  z-50 overflow-hidden '>
      <div className='flex items-center justify-between w-screen h-24 left-0  px-10'>
        <div className='relative flex items-center justify-center text-textColor'>
          <button
            onClick={() => {
              dispatch(toggleNav(false));
              open('Cart');
            }}
          >
            {cartIcon}
          </button>
          <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-sm text-white font-semibold'>
              {qtyTotal ? qtyTotal : 0}
            </p>
          </div>
        </div>
        <button
          onClick={() => dispatch(toggleNav(false))}
          className='relative flex items-center justify-center text-textColor'
        >
          <HiOutlineXMark className='h-6 w-6' />
        </button>
      </div>
      <div className='flex items-center justify-center w-full  h-72 gap-10 flex-col'>
        {nav.tabs.map((item) => (
          <>
            {!item.img && (
              <Link
                to={item.href || ''}
                key={item.name}
                onClick={() => {
                  dispatch(toggleNav(false));
                  open(item.name);
                }}
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
          <img
            loading='lazy'
            src={nav.logo}
            alt='Logo'
            className='w-16 object-cover'
          />
          <p className='headingColor text-3xl font-bold'>{nav.title}</p>
        </div>
      </a>
    </div>
  );
};
export default NavModal;
