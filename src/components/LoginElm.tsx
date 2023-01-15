import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Tooltip from './Tooltip'
const LoginElm = ({
  auth,
}: {
  auth: { status: boolean; cred?: { img: string } }
}) => {
  const [hide, setHide] = useState(true)
  return (
    <>
      {auth.status ? (
        <div className=' flex items-center popout relative max-[330px]:scale-[0.8] justify-center'>
          <img
            src={auth.cred?.img}
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer object-contain'
            alt='profile'
          />
          <p className='headingColor ml-2 cursor-pointer flex items-center justify-center gap-2'>
            <BsChevronDown
              stroke='currentColor'
              fill='currentColor'
              className='h-3 w-3'
              onClick={() => setHide(!hide)}
            />
          </p>
          <Tooltip hide={hide} />
        </div>
      ) : (
        <Link
          to='/login'
          className='flex items-center popout max-[330px]:scale-[0.8] gap-3 border border-slate-200 px-3 py-1 rounded-lg cursor-pointer'
        >
          <ArrowRightOnRectangleIcon className='h-6 w-6' aria-hidden='true' />
          <span className='max-[914px]:hidden'>Login</span>
        </Link>
      )}
    </>
  )
}
export default LoginElm
