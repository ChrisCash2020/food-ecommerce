import { BsTable } from 'react-icons/bs';
import { FaUserCog } from 'react-icons/fa/index.js';
import { MdLogout } from 'react-icons/md/index.js';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/hooks';
import { getUser, logout } from '../../helpers/slices/auth/authSlice';

const Tooltip = ({ hide }: { hide: boolean }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(getUser);
  return (
    <div
      className={`${
        hide ? 'hidden' : ''
      } group-hover:flex min-w-[7em] tooltip bg-green-500 text-white rounded-lg shadow-xl  flex-col absolute top-[250%] -right-[300%]`}
    >
      <Link
        className='px-8 py-2 flex border-b-[0.5px] items-center gap-3  transition-all duration-100 ease-in-out text-base'
        to='/profile'
      >
        Profile <FaUserCog className='h-4 w-4' aria-hidden='true' />
      </Link>
      <button
        //@ts-ignore
        onClick={() => {
          dispatch(logout());
          navigate('/');
          toast.success('Logged out');
        }}
        className='cursor-pointer px-8 py-2 flex items-center gap-3  transition-all duration-100 ease-in-out'
      >
        Logout
        <MdLogout className='h-4 w-4' aria-hidden='true' />
      </button>
      {user.role == 'ADMIN' ? (
        <>
          <Link
            className='px-8 py-2 flex border-t-[0.5px] items-center gap-[1.4rem]  transition-all duration-100 ease-in-out '
            to='/admin/menu'
          >
            Table <BsTable className='h-3 w-3' aria-hidden='true' />
          </Link>
        </>
      ) : null}
    </div>
  );
};
export default Tooltip;
