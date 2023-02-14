import Item from './Item';
import _404 from './_404';
import _404Logo from '../../assets/404.svg';
import { useAppSelector } from '../../helpers/hooks/hooks';
import { getMenu1, getMenu2 } from '../../helpers/slices/products/productSlice';
// location prop is needed to determine which menu type to use
const Main = ({ location }: { location: string }) => {
  // category switching alters the menu so its important to have seperate ones for the for the home page and menu page
  const arr =
    location == 'menu' ? useAppSelector(getMenu2) : useAppSelector(getMenu1);
  console.log(location);
  return (
    <div className='bg-containerbg w-full my-7 flex items-center justify-center min-h-[200px] gap-4  px-2 overflow-x-hidden flex-wrap'>
      <div className='bg-[#eaeaea] w-full my-7 flex items-center justify-center rounded-xl  min-h-[200px] gap-4  px-2 overflow-x-hidden flex-wrap'>
        {/*  arr empty show the not found component */}
        {arr.length == 0 ? (
          <div className='bg-[#eaeaea] flex-col w-full flex items-center justify-center rounded-xl  min-h-[200px] gap-4 py-12  px-2 overflow-x-hidden flex-wrap'>
            <_404
              img={_404Logo}
              alt='Not Found Image'
              text='No Food Items Available'
            />
          </div>
        ) : (
          <>
            {/* arr isn't empty render each a item component */}
            {arr.map((item) => (
              <Item item={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
//@ts-ignore
export default Main;
