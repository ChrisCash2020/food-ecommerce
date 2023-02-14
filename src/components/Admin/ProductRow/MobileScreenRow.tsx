import { useAppDispatch, useAppSelector } from '../../../helpers/hooks/hooks';
import { RootState } from '../../../helpers/other/store';
import { Food } from '../../../helpers/other/types';
import {
  alterDelProductSet,
  getProductSet,
} from '../../../helpers/slices/admin/adminSlice';

//  mobile view of a product row and stores the delcheckbox elememt

export default function MobileScreenRow({
  item,
  handleOpen,
}: {
  item: Food;
  handleOpen: any;
}) {
  const showDelBtns = useAppSelector(
    (state: RootState) => state.admin.showDelBtns
  );
  const delSet = useAppSelector(getProductSet);
  const dispatch = useAppDispatch();
  const handleCheck = (e: { preventDefault: () => void }) => {
    dispatch(alterDelProductSet(Number(item.id)));
    setTimeout(() => {
      console.log(delSet);
    }, 5000);
  };
  return (
    <div className='flex flex-row min-[845px]:hidden w-11/12 justify-center mx-auto'>
      <tr
        className='
        bg-green-200 pb-4  rounded-l-lg mb-2
        flex flex-col justify-evenly w-1/3 items-start'
      >
        <td className='px-6 py-0 h-20 flex items-center justify-center mx-auto'>
          <div className={`h-8 ${showDelBtns ? '' : 'hidden'}`}>
            <input
              onClick={handleCheck}
              type='checkbox'
              className='w-8 h-8 text-white border-gray-300 border rounded focus:ring-green-100'
            />
            <label className='sr-only'>checkbox</label>
          </div>
          <span className='sr-only'>Image</span>
        </td>
        <td className='px-4 py-[12px]'>
          <div className='flex items-center border-b border-transparent'>
            Title
          </div>
        </td>
        <td className='px-4 py-[12px]'>
          <div className='flex items-center border-b border-transparent'>
            Detail
          </div>
        </td>
        <td className='px-4 py-[12px]'>
          <div className='flex items-center border-b border-transparent'>
            Category
          </div>
        </td>
        <td className='px-4 py-[12px]'>
          <div className='flex items-center border-b border-transparent'>
            Stock
          </div>
        </td>
        <td className='px-4 py-[12px]'>
          <div className='flex items-center border-b border-transparent'>
            Price
          </div>
        </td>
        <td className='px-2 py-[12px]'>
          <span className='sr-only'>Edit</span>
        </td>
      </tr>
      <tr className=' w-2/3 bg-white mobile-row rounded-l-lg mb-2 border-grey-light'>
        <td className=' border-gray-200 border hover:bg-gray-100 p-0'>
          <img
            className='w-20 h-20 py-1 max-[845px]:mx-auto '
            src={item.img}
            alt={item.alt}
          ></img>
        </td>
        <td className='border-gray-200 border hover:bg-gray-100 p-3'>
          {item.title}
        </td>
        <td className='border-gray-200 border whitespace-pre-wrap  hover:bg-gray-100 p-3'>
          {item.detail || ' '}
        </td>
        <td className='border-gray-200 border hover:bg-gray-100 p-3'>
          {item.category}
        </td>
        <td className='border-gray-200 border whitespace-pre  hover:bg-gray-100 p-3'>
          {item.stock || ' '}
        </td>
        <td className='border-gray-200 border hover:bg-gray-100 p-3'>
          {item.price}
        </td>
        <td className='border-gray-200 border hover:bg-gray-100 p-3'>
          <button
            onClick={handleOpen}
            className='font-medium pr-1 text-orange-500 hover:underline'
          >
            Edit
          </button>
        </td>
      </tr>
    </div>
  );
}
