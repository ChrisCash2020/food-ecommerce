import _404 from '../components/Other/_404';
import _404Logo from '../assets/404.gif';
import { useState, useLayoutEffect } from 'react';
const _Error = ({ text }: { text?: string }) => {
  const [stall, setStall] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => {
      setStall(true);
    }, 200);
  }, []);
  return (
    <>
      {stall ? (
        <div className='container flex flex-col gap-5 items-center justify-center my-12 mx-auto'>
          <_404
            img={_404Logo}
            scale={true}
            alt={text ? text : '404 page not found'}
            text={text ? text : '404 page not found'}
          />
        </div>
      ) : (
        <div className='w-screen h-screen'></div>
      )}
    </>
  );
};
export default _Error;
