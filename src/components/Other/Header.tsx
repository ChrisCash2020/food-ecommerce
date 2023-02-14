import { FunctionComponent } from 'react';
import { HeaderProps } from '../../helpers/other/types';
import { nanoid } from 'nanoid';
import { useAppSelector } from '../../helpers/hooks/hooks';
import { getHeader } from '../../helpers/slices/products/productSlice';
import { FaCarSide } from 'react-icons/fa/index.js';
import Image from './Image';
import { Link } from 'react-router-dom';
const Header: FunctionComponent<HeaderProps> = (props) => {
  const left = props.left;
  const right = props.right;
  // the header context get the specific elements needed for showcase
  const header = useAppSelector(getHeader);
  const leftElement = (
    <div
      id='left'
      className='flex flex-col gap-3 justify-center min-h-[40vh] md:w-1/2'
    >
      <div className='flex items-center w-fit gap-2 bg-green-100 px-4 py-1 rounded-full'>
        <p className='text-base text-green-500 font-bold'>{left.logo.text}</p>
        <FaCarSide className='text-gray-600 h-5 w-5' />
      </div>
      <p className='text-[3rem] max-[940px]:text-[2.2rem]  lg:w-[70%] max-[670px]:w-[438px] max-[510px]:w-full font-bold tracking-wide headingColor'>
        {left.title.text}{' '}
        <span className='text-green-600 max-[940px]:text-[2.2rem] text-[3rem]'>
          {left.title.bold}
        </span>
      </p>
      <p className='text-base text-textColor text-left lg:w-[70%]'>
        {left.body}
      </p>
      <Link to='/menu'>
        <button className='bg-gradient-to-br text-white from-green-500 to-green-600 md:w-fit px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 w-full mt-4 hover:scale-[1.02]'>
          {left.btn}
        </button>
      </Link>
    </div>
  );
  const rightElement = (
    <div className='md:max-w-1/2 md:h-[62vh] max-[695px]:h-fit max-[768px]:w-full max-[768px]:px-7 max-[768px]:pt-5  w-1/2 h-[45vh] m max-sm:mt-4 max-[470px]:h-fit relative   flex items-center  justify-center   pt-5 gap-6 flex-wrap '>
      <img
        loading='lazy'
        src={right.bg}
        className='special absolute z-10 md:h-[62vh] h-[39vh] max-[377px]:mt-[40%] max-[377px]:h-[60vh]   rounded-lg w-full top-2 right-0 lg:w-1/2 md:w-[70%] '
        alt=''
      />
      {header.map((item) => (
        <div
          key={nanoid()}
          className='cursor-pointer min-h-[150px] max-h-[150px] lg:min-h-[220px]  min-w-[170px] lg:max-w-[180px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center z-20 shadow-stone-500'
        >
          <Image
            src={item.img}
            alt={item.alt}
            classNames='w-24 lg:w-40 -mt-10 transition-all hover:scale-[1.1] lg:-mt-20'
          />
          <p className='text-base text-center lg:text-lg font-semibold text-textColor'>
            {item.title}
          </p>
          <p className='text-[10px] text-center lg:text-lg text-lightGray font-semibold my-2 lg:my-3'>
            {item.detail}
          </p>
          <p className='text-sm font-semibold headingColor'>
            <span className='text-xs text-green-300'>$</span> {item.price}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <header className='flex md:flex-row mt-3 pt-[1em] max-[695px]:h-fit items-center flex-col w-full h-fit'>
        {leftElement}
        {rightElement}
      </header>
    </>
  );
};

export default Header;
