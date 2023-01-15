import _404 from '../components/_404'
import construction from '../assets/construction.svg'
const About = () => {
  return (
    <div className='bg-[#eaeaea] flex-col w-full my-12 flex items-center justify-center rounded-xl  min-h-[200px] gap-4  px-2 py-12 overflow-x-hidden flex-wrap'>
      <_404
        img={construction}
        alt='About Image'
        text='About Page Cominig Up soon!!'
      />
    </div>
  )
}

export default About
