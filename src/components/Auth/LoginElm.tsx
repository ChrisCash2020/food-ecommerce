import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs/index.js';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../helpers/other/store';
import { userData } from '../../helpers/other/types';
import Tooltip from './Tooltip';
import userPlacehodler from '../../assets/user.png';
import { HiArrowRightOnRectangle } from 'react-icons/hi2/index.js';
import { getUser } from '../../helpers/slices/auth/authSlice';
const LoginElm = () => {
  const [hide, setHide] = useState(true);
  // this element depends on a user being logged in
  //@ts-ignore
  const user: userData = useSelector(getUser);

  return (
    <>
      {user != null ? (
        <div className=' flex items-center  relative max-[330px]:scale-[0.8] justify-center'>
          <img
            loading='lazy'
            src={user.img || userPlacehodler}
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer object-contain'
            alt='profile'
          />
          <p className='headingColor relative ml-2 cursor-pointer flex items-center justify-center gap-2'>
            <BsChevronDown
              stroke='currentColor'
              fill='currentColor'
              className='h-3 w-3'
              //  on click the state toggles the tooltip for user options
              onClick={() => setHide(!hide)}
            />
            <Tooltip hide={hide} />
          </p>
        </div>
      ) : (
        <Link
          to='/login'
          className='flex items-center max-[330px]:scale-[0.8] gap-3 border border-slate-200 px-3 py-1 rounded-lg cursor-pointer'
        >
          <HiArrowRightOnRectangle className='h-6 w-6' aria-hidden='true' />
          <span className='max-[914px]:hidden'>Login</span>
        </Link>
      )}
    </>
  );
};
export default LoginElm;
