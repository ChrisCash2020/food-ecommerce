import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { FunctionComponent, useRef, useState, MouseEvent } from 'react'

import { FoodArray, SliderProps, Food, Dish } from '../helpers/types'
import Item from './Item'
import Tab from './Tab'
import { nanoid } from 'nanoid'
const Section = ({
  array,
  title,
  slider,
}: {
  array: Food[]
  title: string
  slider: boolean
}) => {
  const [arr, setArr] = useState(array)
  function scrolltoEnd(bool: boolean) {
    const container = document.getElementById('slider')
    if (bool == true) {
      container?.scroll(10000, 0)
    } else {
      container?.scroll(0, 0)
    }
  }
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
        {slider && (
          <div className='hidden md:flex items-center gap-3'>
            <div
              onClick={() => scrolltoEnd(false)}
              className='w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center cursor-pointer hover:bg-green-600 transition-all duration-100 ease-in-out hover:shadow-lg'
            >
              <ChevronLeftIcon className='text-white h-4 w-5' />
            </div>
            <div
              onClick={() => scrolltoEnd(true)}
              className='w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center cursor-pointer hover:bg-green-600 transition-all duration-100 ease-in-out hover:shadow-lg'
            >
              <ChevronRightIcon className='text-white h-4 w-5' />
            </div>
          </div>
        )}
      </div>
      <div
        id='slider'
        className={`${
          slider && 'bg-[#eaeaea] my-12'
        } w-full  flex items-center rounded-xl min-h-[200px] gap-4  px-2 overflow-x-scroll scrollbar-hide scroll-smooth`}
      >
        {arr.map((item, i) => (
          <div key={nanoid()}>
            {slider ? <Item item={item} /> : <Tab dish={item} />}
          </div>
        ))}
      </div>
    </section>
  )
}
export default Section
