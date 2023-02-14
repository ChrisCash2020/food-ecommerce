import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../helpers/hooks/hooks';
import {
  categoryFilter,
  categoryFilter2,
} from '../../helpers/slices/other/filterSlice';
import { Dish } from '../../helpers/other/types';
// basic component for the tab buttons
const Tab = ({ dish }: { dish: Dish }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  //location used to deteremine which menu to alter
  const handleClick = () => {
    return location.pathname == '/menu'
      ? dispatch(categoryFilter2(dish.title))
      : dispatch(categoryFilter(dish.title));
  };
  return (
    <button
      onClick={handleClick}
      key={nanoid()}
      className='group bg-btnOverlay hover:bg-green-500 focus:bg-green-500 active:animate-[swing_150ms_linear] w-24 min-w-[6rem] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all  ease-out'
    >
      <div className='w-10 h-10 rounded-full bg-green-500 group-hover:bg-stone-200 group-focus:bg-stone-200  flex items-center justify-center'>
        <span className='group-hover:text-black group-focus:text-black text-slate-100 text-lg'>
          {dish.img}
        </span>
      </div>
      <p className='text-base text-textColor group-hover:text-white group-focus:text-white'>
        {dish.title}
      </p>
    </button>
  );
};

export default Tab;
