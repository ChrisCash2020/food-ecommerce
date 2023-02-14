import { BsPersonFill } from 'react-icons/bs';
import { ImSpinner3 } from 'react-icons/im';

export default function ProfileLoader() {
  return (
    <div className='w-full md:py-10 h-full flex items-center justify-center'>
      <div className='border w-full max-w-lg  shadow-lg animate-pulse bg-white flex border-gray-300 items-center rounded-lg p-4 flex-col justify-center gap-4  mt-8 mg:mt-10'>
        <div className='w-full py-3 border-b border-gray-300 flex items-center gap-2'>
          <BsPersonFill
            stroke='currentColor'
            fill='currentColor'
            className='h-7 w-7 text-gray-600'
          />
          <div className='w-full pl-1 h-full bg-slate-300'>&nbsp;&nbsp;</div>
        </div>
        <div className='flex justify-center items-center flex-col bg-slate-300  border-2 border-dotted border-gray-300 w-full h-[225px]  md:h-[420px] round-lg'>
          <ImSpinner3
            stroke='currentColor'
            fill='currentColor'
            className='animate-spin h-1/2 w-full max-w-[140px]'
          />
        </div>
        <div className='w-full flex items-center justify-center'>
          <button className='ml-0 flex justify-center  items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-gray-500 px-12 py-2 text-lg text-white'>
            <ImSpinner3
              stroke='currentColor'
              fill='currentColor'
              height='1em'
              width='1em'
              className='animate-spin'
            />
            Saving
          </button>
        </div>
      </div>
    </div>
  );
}
