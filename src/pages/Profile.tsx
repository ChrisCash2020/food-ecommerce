import { BsPersonFill, BsPhone } from 'react-icons/bs'
import { BiSave } from 'react-icons/bi'

import { FaTrash } from 'react-icons/fa'

const Profile = () => {
  return (
    <div className='container md:py-10 h-full flex items-center justify-center'>
      <div className='border w-full  md:w-[60%]  flex border-gray-300 items-center rounded-lg p-4 flex-col justify-center gap-4  mt-8 mg:mt-10'>
        <div className='w-full py-3 border-b border-gray-300 flex items-center gap-2'>
          <BsPersonFill
            stroke='currentColor'
            fill='currentColor'
            className='text-xl text-gray-600'
            height='1em'
            width='1em'
          />

          <input
            type='text'
            placeholder='Enter full name'
            className='h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400'
            value='Christian Olowokere'
          />
        </div>
        <div className='w-full flex flex-col md:flex-row items-center gap-3'>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <BsPhone
              stroke='currentColor'
              fill='currentColor'
              className='text-2xl text-gray-600'
              height='1em'
              width='1em'
            />
            <input
              type='text'
              placeholder='Phone'
              className='h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400'
              value=''
            />
          </div>
        </div>
        <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[225px]  md:h-[420px] round-lg'>
          <div className='relative h-full'>
            <img
              src='https://lh3.googleusercontent.com/a/AEdFTp53bpCClr6XJTsminLBOvRQQlJ9aomc6Ehb-LvqqWs=s96-c'
              alt='uploaded food'
              className='w-full h-full object-cover'
            />
            <button
              title='Remove Photo'
              className='absolute bottom-3 right-3 rounded-full p-2 md:p-5 bg-green-600 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out'
            >
              <FaTrash
                stroke='currentColor'
                fill='currentColor'
                className='text-white'
                height='1em'
                width='1em'
              />
            </button>
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <button className='ml-0 flex justify-center items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-gray-500 px-12 py-2 text-lg text-white'>
            <BiSave
              stroke='currentColor'
              fill='currentColor'
              height='1em'
              width='1em'
            />{' '}
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
export default Profile
