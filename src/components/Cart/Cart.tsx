import _404 from '../Other/_404';
import CartHeader from './CartHeader';
import CartBody from './CartBody';
import { useAppSelector } from '../../helpers/hooks/hooks';
import cartLogo from '../../assets/cartLogo.svg';
import CheckoutBody from './CheckoutBody';

const Cart = () => {
  const auth = useAppSelector((state) => state.auth.user);
  const onCheckout = useAppSelector((state) => state.cart.onCheckout);
  return (
    <>
      {auth != undefined ? (
        <>
          {onCheckout ? (
            <>
              <CartHeader auth={true} checkout={true} />
              <CheckoutBody />
            </>
          ) : (
            <>
              <CartHeader auth={true} checkout={false} />
              <CartBody />
            </>
          )}
        </>
      ) : (
        <>
          <CartHeader auth={false} checkout={false} />
          <div className='flex-col flex h-full items-center justify-center px-5'>
            <_404 img={cartLogo} alt='Empty Cart' text='Cart is empty' />
          </div>
        </>
      )}
    </>
  );
};
//@ts-ignore
export default Cart;
