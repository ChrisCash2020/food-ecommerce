import { FunctionComponent } from 'react'
import { HeaderProps } from '../helpers/types'
import { nanoid } from 'nanoid'
import { bikeIcon } from '../assets/assests'

const Header: FunctionComponent<HeaderProps> = (props) => {
  const left = props.left
  const right = props.right
  const leftElement = (
    <div
      id='left'
      className='flex flex-col gap-3 justify-center min-h-[40vh] md:w-1/2'
    >
      <div className='flex items-center w-fit gap-2 bg-green-100 px-4 py-1 rounded-full'>
        <p className='text-base text-green-500 font-bold'>{left.logo.text}</p>
        {bikeIcon}
        {/* <img
          src={left.logo.img}
          alt=''
          className='h-6 w-6 scale-x-[-1] bg-white py-[0.35em] rounded-full'
        /> */}
      </div>
      <p className='text-[3rem] max-[940px]:text-[2.2rem] max-[670px]:w-[438px] max-[510px]:w-full font-bold tracking-wide headingColor'>
        {left.title.text}{' '}
        <span className='text-green-600 max-[940px]:text-[2.2rem] text-[3rem]'>
          {left.title.bold}
        </span>
      </p>
      <p className='text-base text-textColor text-left lg:w-[80%]'>
        {left.body}
      </p>
      <button className='bg-gradient-to-br text-white from-green-500 to-green-600 md:w-fit px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 w-full mt-4 hover:scale-[1.02]'>
        {left.btn}
      </button>
    </div>
  )
  const rightElement = (
    <div className='md:max-w-1/2 md:h-[62vh] w-4/5 max-[470px]:w-full h-[45vh] max-sm:mt-4 max-[470px]:h-fit relative   flex items-center  justify-center  pt-5 gap-6 flex-wrap '>
      <img
        src={right.bg}
        className='special absolute z-10 md:h-[62vh] h-[45vh] max-[377px]:mt-[40%] max-[377px]:h-[60vh] max-[470px]:w-full   rounded-lg w-full top-2 right-0 lg:w-1/2 md:w-3/5 '
        alt=''
      />
      {right.food.map((item) => (
        <div
          key={nanoid()}
          className='cursor-pointer min-h-[140px] lg:min-h-[210px] min-w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center z-20 shadow-stone-500'
        >
          <img
            src={item.img}
            alt={item.alt}
            className='w-24 lg:w-40 -mt-10 popout lg:-mt-20'
          />
          <p className='text-base lg:text-lg font-semibold text-textColor'>
            {item.name}
          </p>
          <p className='text-[10px] lg:text-lg text-lightGray font-semibold my-2 lg:my-3'>
            {item.desc}
          </p>
          <p className='text-sm font-semibold headingColor'>
            <span className='text-xs text-green-300'>$</span> {item.price}
          </p>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <header className='flex md:flex-row mt-3  items-center flex-col w-full h-fit'>
        {leftElement}
        {rightElement}
      </header>
    </>
  )
}

export default Header
