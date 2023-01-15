import { Food } from '../helpers/types'
import Item from './Item'
import { nanoid } from 'nanoid'
const Main = ({ arr }: { arr: JSX.Element[] }) => {
  return (
    <div className='bg-containerbg w-full my-12 flex items-center justify-center min-h-[200px] gap-4  px-2 overflow-x-hidden flex-wrap'>
      <div className='bg-[#eaeaea] w-full my-12 flex items-center justify-center rounded-xl  min-h-[200px] gap-4  px-2 overflow-x-hidden flex-wrap'>
        {arr.map((item, i) => (
          <div key={nanoid()}>{item}</div>
        ))}
      </div>
    </div>
  )
}
export default Main
