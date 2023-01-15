import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import navLogo from '../assets/navLogo.png'

const Login = () => {
  return (
    <div className='container md:py-10 h-full m-auto'>
      <div className='flex justify-center items-center flex-wrap h-full g-3 text-gray-800'>
        <div className='hidden md:w-8/12 lg:w-6/12 mb-12 md:mb-0 md:flex items-center justify-center '>
          <img
            src={navLogo}
            className='w-96 cursor-pointer hover:animate-[swing_300ms_linear]'
            alt='logo-login'
          />
        </div>
        <div className='w-full md:w-[30rem]'>
          <form className='p-2'>
            <div className='flex items-center justify-center gap-5  text-center'>
              <p className='flex items-center w-36 h-10 bg-white justify-center rounded headingColor px-5 cursor-pointer shadow-sm hover:bg-slate-100'>
                <BsGithub
                  stroke='currentColor'
                  fill='currentColor'
                  className='text-xl w-5 mr-2'
                  height='1em'
                  width='1em'
                />
                <span>Github</span>
              </p>
              <p className='flex items-center w-36 h-10 bg-white justify-center rounded headingColor px-5 cursor-pointer shadow-sm hover:bg-slate-100'>
                <FcGoogle
                  stroke='currentColor'
                  fill='currentColor'
                  className='text-xl w-5 mr-2'
                  height='1em'
                  width='1em'
                />
                <span>Google</span>
              </p>
            </div>
            <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
              <p className='text-center text-textColor text-sm font-semibold mx-4 mb-0'>
                OR
              </p>
            </div>
            <div className='mb-6'>
              <input
                type='text'
                className='form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
                placeholder='Email address'
              />
            </div>
            <div className='mb-6'>
              <input
                type='password'
                className='form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
                placeholder='Password'
              />
            </div>
            <div className='flex justify-between items-center mb-6'>
              <a
                className='text-gray-600 hover:text-green-700 focus:text-green-700 active:text-green-800 duration-200 transition ease-in-out'
                href='/'
              >
                Forgot password?
              </a>
            </div>
            <p className='cursor-pointer flex items-center justify-center px-7 py-3 bg-gradient-to-br from-green-400 to-green-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'>
              Sign in
            </p>
            <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
              <p className='text-center text-sm text-textColor font-semibold mx-4 mb-0'>
                Don't have an account?
              </p>
            </div>
            <a href='/register'>
              <p className='cursor-pointer flex items-center justify-center px-7 py-3 bg-gradient-to-br from-green-400 to-green-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'>
                Sign Up
              </p>
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
