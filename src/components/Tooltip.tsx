import { FaUserCog } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Tooltip = ({ hide }: { hide: boolean }) => {
  return (
    <div
      className={`${
        hide ? 'hidden' : ''
      } group-hover:flex min-w-[7em] tooltip bg-green-500 text-white rounded-lg shadow-xl  flex-col absolute bottom-[-218%] right-[-10%] `}
    >
      <Link
        className='px-8 py-2 flex border-b-[0.5px] items-center gap-3  transition-all duration-100 ease-in-out text-base'
        to='/profile'
      >
        Profile <FaUserCog className='h-4 w-4' aria-hidden='true' />
      </Link>
      <button className='cursor-pointer px-8 py-2 flex items-center gap-3  transition-all duration-100 ease-in-out'>
        Logout
        <MdLogout className='h-4 w-4' aria-hidden='true' />
      </button>
    </div>
  )
}
export default Tooltip
