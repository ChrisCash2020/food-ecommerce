import { useAppDispatch, useAppSelector } from '../../../helpers/hooks/hooks';
import { RootState } from '../../../helpers/other/store';
import { Food } from '../../../helpers/other/types';
import {
  alterDelProductSet,
  getProductSet,
} from '../../../helpers/slices/admin/adminSlice';

//  Laptop view of a product row and stores the delcheckbox elememt

export default function FullScreenRow({
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
    <tr className='border-b bg-green-100 w-full text-center border-stone-900 max-[845px]:hidden'>
      <td className='px-2'>
        <div className='flex items-center justify-center'>
          <div className={`mr-6 ${showDelBtns ? '' : 'hidden'}`}>
            <input
              type='checkbox'
              onClick={handleCheck}
              className='w-4 h-4 delCheckbox text-white border-gray-300 border rounded focus:ring-green-100'
            />
            <label className='sr-only'>checkbox</label>
          </div>

          <img
            className='lg:w-20 w-24 h-20 py-3 lg:py-2 max-[845px]:mx-auto '
            src={item.img}
            alt={item.alt}
          ></img>
        </div>
      </td>
      <td className='px-3 py-1 w-32 text-left whitespace-nowrap'>
        {item.title}
      </td>
      <td className='px-3 py-1 text-left'>{item.detail}</td>
      <td className='px-3 py-1'>{item.category}</td>
      <td className='px-3 py-1 w-2'>{item.stock}</td>
      <td className='px-3 py-1 w-2'>{item.price}</td>
      <td className='px-3 py-1 text-right'>
        <button
          onClick={handleOpen}
          className='font-medium pr-1 mr-3 text-[#ff4500] hover:underline'
        >
          Edit
        </button>
      </td>
    </tr>
  );
}
