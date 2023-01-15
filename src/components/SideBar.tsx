import { cart } from '../helpers/config'
import Cart from './Cart'
import Contact from './Contact'

const SideBar = ({ type }: { type: string }) => {
  const className =
    'collapse w-full h-screen md:w-[350px] bg-white md:backdrop-blur-sm flex items-center flex-col z-[101] drop-shadow-xl fixed top-0'
  return (
    <>
      <div
        id={type}
        className={`${className} ${type == 'cart' ? 'right-0' : 'left-0'}`}
      >
        {type == 'cart' ? (
          <Cart foods={cart.foods} total={cart.total} />
        ) : (
          <Contact />
        )}
      </div>
    </>
  )
}

export default SideBar
