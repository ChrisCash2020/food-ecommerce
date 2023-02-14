import { ImSpinner3 } from 'react-icons/im';

export function ItemModalLoader({ text, id }: { text: string; id: string }) {
  console.log('in loader');
  return (
    <div
      id={id}
      className='
     max-w-lg 
      bg-white border-gray-300 w-[32rem] rounded-lg shadow-lg'
    >
      <div className='animate-pulse'>
        <div className='flex items-start justify-between p-4 border-b rounded-t '>
          <h3 className='text-xl font-semibold text-gray-900'>
            Product Revision
          </h3>
        </div>
        <div className='p-6 space-y-6'>
          <div className='grid grid-cols-6 gap-6'>
            <div className='col-span-6 sm:col-span-3 w-full'>
              <label
                htmlFor='title'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Title
              </label>
              <div className='w-full py-3 border-b border-green-300 flex items-center gap-2'>
                <div className='w-full pl-1 h-full bg-slate-300'>
                  &nbsp;&nbsp;
                </div>
              </div>
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='last-name'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Detail
              </label>
              <div className='w-full py-3 border-b border-green-300 flex items-center gap-2'>
                <div className='w-full pl-1 h-full bg-slate-300'>
                  &nbsp;&nbsp;
                </div>
              </div>
            </div>
            <div className='col-span-2'>
              <label
                htmlFor='phone-number'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Category
              </label>
              <div className='w-full py-3 border-b border-green-300 flex items-center gap-2'>
                <div className='w-full pl-1 h-full bg-slate-300'>
                  &nbsp;&nbsp;
                </div>
              </div>
            </div>
            <div className='col-span-2'>
              <label
                htmlFor='phone-number'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Price
              </label>
              <div className='w-full py-3 border-b border-green-300 flex items-center gap-2'>
                <div className='w-full pl-1 h-full bg-slate-300'>
                  &nbsp;&nbsp;
                </div>
              </div>
            </div>
            <div className='col-span-2'>
              <label
                htmlFor='department'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Stock
              </label>
              <div className='w-full py-3 border-b border-green-300 flex items-center gap-2'>
                <div className='w-full pl-1 h-full bg-slate-300'>
                  &nbsp;&nbsp;
                </div>
              </div>
            </div>
            <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 max-w-2xl h-[125px]  md:h-[230px] round-lg col-span-full'>
              <ImSpinner3
                stroke='currentColor'
                fill='currentColor'
                className='animate-spin h-1/2 w-full max-w-[140px]'
              />
            </div>
          </div>
        </div>
        <div className='flex items-center p-6 space-x-2 border-t border-green-200 rounded-b'>
          <button className='ml-0 flex justify-center  items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-gray-500 px-12 py-2 text-lg text-white'>
            <ImSpinner3
              stroke='currentColor'
              fill='currentColor'
              height='1em'
              width='1em'
              className='animate-spin'
            />
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}
