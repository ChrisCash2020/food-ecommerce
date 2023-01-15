import _404 from '../components/_404'
import _404Logo from '../assets/404.gif'
const _Error = () => {
  return (
    <div className='container flex flex-col gap-5 items-center justify-center my-12 mx-auto'>
      <_404
        img={_404Logo}
        scale={true}
        alt='404 Page'
        text='404 page not found'
      />
    </div>
  )
}
export default _Error
