import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  externalLogin,
  login,
  refresh,
} from '../helpers/slices/auth/authSlice';
import { FaSignInAlt } from 'react-icons/fa/index.js';
import { useAppDispatch, useAppSelector } from '../helpers/hooks/hooks';
import * as Func from '../helpers/other/functions';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import ReactPasswordToggleIcon from 'react-password-toggle-icon';

const Login = () => {
  // the body for keeping track of user inputs
  let inputRef = useRef();
  const showIcon = () => (
    <VscEye
      className='h-5 w-5 mr-1'
      fill='currentColor'
      stroke='currentColor'
    />
  );
  const hideIcon = () => (
    <VscEyeClosed
      className='h-5 w-5 mr-1'
      fill='currentColor'
      stroke='currentColor'
    />
  );
  const [body, setBody] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(login(body))
      .unwrap()
      .then((originalPromiseResult) => {
        toast.success('Logged In');
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  useEffect(() => {
    //@ts-ignore;
    if (window.google) {
      //@ts-ignore;
      Func.handleGoogleLogin(window.google, dispatch, externalLogin);
    }
    dispatch(refresh());
  }, [dispatch]);
  useEffect(() => {
    if (user != null) {
      // the register req to the backend was successful i need to navigate home else reset the auth context
      navigate('/');
    }
    // dispatch(refresh());
  }, []);

  return (
    <div className='container py-10 h-full m-auto'>
      <div className='flex justify-center items-center flex-wrap h-full g-3 text-gray-800'>
        <div className='hidden md:w-8/12 lg:w-6/12 mb-12 md:mb-0 md:flex items-center justify-center flex-col '>
          <div className='flex flex-col justify-center items-center font-[700] text-[2em]'>
            <FaSignInAlt className='h-[5em] w-[5em] text-green-600 cursor-pointer hover:animate-[swing_300ms_linear]' />{' '}
            Login
          </div>
        </div>
        <div className='w-full md:w-[30rem]'>
          <form className='p-2'>
            <div className='flex items-center justify-center gap-5  text-center'>
              <button
                id='loginBtn'
                className='flex items-center w-36 h-10 bg-white justify-center rounded headingColor px-5 cursor-pointer shadow-sm hover:bg-slate-100'
              ></button>
            </div>
            <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
              <p className='text-center text-textColor text-sm font-semibold mx-4 mb-0'>
                OR
              </p>
            </div>
            <div className='mb-6'>
              <input
                onChange={(e) => Func.onChange(e, (newVal) => setBody(newVal))}
                name='email'
                type='text'
                className='form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
                placeholder='Email address'
              />
            </div>
            <div className='mb-6 relative block'>
              <input
                onChange={(e) => Func.onChange(e, (newVal) => setBody(newVal))}
                name='password'
                type='password'
                //@ts-ignore
                ref={inputRef}
                className='form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
                placeholder='Password'
              />
              <ReactPasswordToggleIcon
                inputRef={inputRef}
                showIcon={showIcon}
                hideIcon={hideIcon}
              />
            </div>
            <div className='flex justify-between items-center mb-6'>
              <a
                className='text-gray-600 hover:text-green-700 focus:text-green-700 active:text-green-800 duration-200 transition ease-in-out'
                href='#'
              >
                Forgot password?
              </a>
            </div>
            <button
              onClick={onSubmit}
              className='cursor-pointer flex items-center justify-center px-7 py-3 bg-gradient-to-br from-green-400 to-green-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'
            >
              Sign in
            </button>
            <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
              <p className='text-center text-sm text-textColor font-semibold mx-4 mb-0'>
                Don't have an account?
              </p>
            </div>
            <Link to='/register'>
              <button className='cursor-pointer flex items-center justify-center px-7 py-3 bg-gradient-to-br from-green-400 to-green-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'>
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
