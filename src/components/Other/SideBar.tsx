import Cart from '../Cart/Cart';
import Contact from './Contact';
// type prop the the to set the loction and which element to use
const SideBar = ({ type }: { type: string }) => {
  const className =
    'collapse w-full h-screen md:w-[350px] bg-white md:backdrop-blur-sm flex items-center flex-col z-[101] drop-shadow-xl fixed top-0';
  return (
    <>
      <div
        id={type}
        className={`${className} ${type == 'cart' ? 'right-0' : 'left-0'}`}
      >
        {type == 'cart' ? <Cart /> : <Contact />}
      </div>
    </>
  );
};

export default SideBar;
