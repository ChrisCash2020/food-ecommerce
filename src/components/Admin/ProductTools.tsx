import { MdTopic } from 'react-icons/md';
import { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/hooks';
import { RootState } from '../../helpers/other/store';
import {
  ClearProductInSet,
  toggleAddModal,
  toggleConfirmDel,
  toggleDelBtns,
} from '../../helpers/slices/admin/adminSlice';
import { toast } from 'react-toastify';
import { unCheckProductSet } from '../../helpers/other/functions';

//   component storing elements that will open modals for the Admin Crud functions

export function ProductTools() {
  const DelBtns = useAppSelector((state: RootState) => state.admin.showDelBtns);
  const [undo, setUndo] = useState(false);
  const OpenAddModal = () => {
    dispatch(toggleAddModal(true));
    setUndo(false);
  };
  const OpenDelAllModal = () => {
    console.log('here');
    dispatch(toggleConfirmDel(true));
    setUndo(false);
  };
  const handleEnable = () => {
    console.log('here');
    DelBtns == false
      ? toast.success('Select Products to Delete', {
          position: 'top-center',
          autoClose: 1000,
        })
      : null;
    dispatch(toggleDelBtns(!DelBtns));
    unCheckProductSet();
    dispatch(ClearProductInSet());
    setUndo(false);
  };
  const dispatch = useAppDispatch();
  return (
    <>
      <>
        {DelBtns ? (
          <>
            <button
              onClick={OpenDelAllModal}
              type='button'
              className='my-6 w-[72%] sticky right-[14%] left-[15.5%] bottom-3 z-[1]  px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out'
            >
              Confirm Deletion
            </button>
          </>
        ) : null}
      </>
      <div className='sticky right-6 left-[100%] mx-2 bottom-0 w-14'>
        <button
          onClick={() => setUndo((state) => !state)}
          type='button'
          className='absolute -right-4 bottom-4 max-[845px]:bottom-[4.5rem] flex items-center justify-center text-white bg-green-600 rounded-full w-14 h-14 hover:bg-green-500 focus:ring-4 focus:ring-green-200 focus:outline-none'
        >
          <FaPlus
            stroke='currentColor'
            fill='currentColor'
            className={`h-8 w-8 transition-transform ${
              undo ? 'rotate-45' : ''
            }`}
          />

          <span className='sr-only'>Open actions menu</span>
        </button>
        <button
          onClick={OpenAddModal}
          className={`absolute -right-4 bottom-[4.75rem] max-[845px]:bottom-[8.3rem] ${
            undo ? '' : 'hidden'
          } bg-gray-50 border-gray-300 border-2 group pb-1 rounded-full w-14 h-14`}
        >
          <div className='group-hover:flex relative -left-[120%] top-1 hidden'>
            <span className='z-10 p-3  text-sm font-medium w-fit  leading-none text-white whitespace-nowrap transition-all duration-300 bg-[#3F3F46] rounded-lg shadow-sm'>
              Add
            </span>
            <span className='absolute w-3 h-3 z-5 p-2 top-[10px] -right-[7.5%]  rotate-45 text-sm font-medium  leading-none transition-all duration-300 bg-[#3F3F46] shadow-sm'></span>
          </div>
          <div className='text-[#3F3F46] flex items-center justify-center w-[3.35rem] h-12 absolute top-0 bottom-0 left-0 right-0'>
            <MdTopic
              stroke='currentColor'
              fill='currentColor'
              className='w-8 h-8'
            />
          </div>
        </button>
        <button
          onClick={handleEnable}
          className={`absolute -right-4  bottom-[8.58rem] max-[845px]:bottom-[12.1rem] ${
            undo ? '' : 'hidden'
          }   bg-gray-50 border-gray-300 pr-2 border-2 group rounded-full w-14 h-14`}
        >
          <div className='group-hover:flex relative -left-[300%] top-1 hidden'>
            <span className='z-10 p-3  text-sm font-medium w-fit  leading-none text-white whitespace-nowrap transition-all duration-300 bg-[#3F3F46] rounded-lg shadow-sm'>
              Toggle Delete
            </span>
            <span className='absolute w-3 h-3 z-5 p-2 top-[10px] -right-[185%]  rotate-45 text-sm font-medium  leading-none transition-all duration-300 bg-[#3F3F46] shadow-sm'></span>
          </div>

          <div className='text-[#3F3F46] flex items-center justify-center w-[3.35rem] h-14 absolute top-0 bottom-0 left-0 right-0 '>
            <FaTrash
              stroke='currentColor'
              fill='currentColor'
              className='w-6 h-6'
            />
          </div>
        </button>
      </div>
    </>
  );
}

//  <span className='relative z-10 p-3 text-sm font-medium w-fit  leading-none text-white whitespace-nowrap transition-all duration-300 bg-stone-600 rounded-lg shadow-sm'>
//    Add Product
//  </span>;
// <div className='w-3 h-3 -ml-2 rotate-45  bg-stone-600 shadow-sm'></div>;
