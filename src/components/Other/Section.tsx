import Item from './Item';
import Tab from './Tab';
import { nanoid } from 'nanoid';
import { menu } from '../../helpers/other/config';
import { useAppSelector } from '../../helpers/hooks/hooks';
import { getShowcase } from '../../helpers/slices/products/productSlice';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2/index.js';
import * as Func from '../../helpers/other/functions';
// props for the title and type of section ie slider
const Section = ({ title, slider }: { title: string; slider: boolean }) => {
  const showcase = useAppSelector(getShowcase);
  return (
    <section className='w-full my-9'>
      <div
        className={`${
          slider ? 'justify-between' : 'justify-center'
        } w-full flex items-center`}
      >
        <p className='text-2xl headingColor font-semi-bold capitalize relative before:absolute before:rounded before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-green-400 to-green-600 transition-all ease-in-out duration-100 text-center'>
          {title}
        </p>
        {/* if slider is true the cheveron buttons are displayed withe the scroll actions */}
        {slider && (
          <div className='hidden md:flex items-center gap-3'>
            <div
              onClick={() => Func.scrolltoEnd(false)}
              className='w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center cursor-pointer hover:bg-green-600 transition-all duration-100 ease-in-out hover:shadow-lg'
            >
              <HiChevronLeft className='text-white h-4 w-5' />
            </div>
            <div
              onClick={() => Func.scrolltoEnd(true)}
              className='w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center cursor-pointer hover:bg-green-600 transition-all duration-100 ease-in-out hover:shadow-lg'
            >
              <HiChevronRight className='text-white h-4 w-5' />
            </div>
          </div>
        )}
      </div>
      <div
        id='slider'
        className={`${
          slider ? 'bg-[#eaeaea] my-12' : 'min-[1023px]:justify-center'
        } w-full flex items-center rounded-xl min-h-[200px] gap-4  px-2 scrollbar-hide overflow-x-scroll scroll-smooth`}
      >
        {/*  if slider is true the fruit showcase are the children
        otherwhise the menu tabs are the children
        */}
        {slider ? (
          <>
            {showcase.map((item, i) => {
              return <Item item={item} key={nanoid()} />;
            })}
          </>
        ) : (
          <>
            {menu.tabs.map((item, i) => (
              <Tab dish={item} key={nanoid()} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};
export default Section;
