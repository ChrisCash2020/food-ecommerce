import { BsArrowLeft, BsFillChatLeftTextFill } from 'react-icons/bs/index.js';
import contactLogo from '../../assets/contactLogo.svg';
// simple for that doesn't go any where
const Contact = () => {
  function close() {
    const container = document.getElementById('contact');
    container?.classList.add('collapse');
  }
  return (
    <>
      <div className='w-full flex flex-row items-center bg-white justify-between my-2 px-4 py-2 cursor-pointer'>
        <div className='flex items-center hover:scale-[0.9] justify-center gap-x-2 px-2'>
          <BsFillChatLeftTextFill
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            className='text-2xl text-green-400'
            height='1em'
            width='1em'
          />
          <span>CONTACT US</span>
        </div>
        <button onClick={close}>
          <BsArrowLeft
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            className='text-xl '
            height='9em'
            width='1em'
          />
        </button>
      </div>
      <div className='w-full h-full flex flex-col items-center bg-[#f5f3f3]'>
        <img
          loading='lazy'
          src={contactLogo}
          alt='Contact Image'
          className='w-[30%] h-[20.5%]'
        />
        <form
          action='#'
          className='mb-6 w-full px-4 flex items-center justify-center gap-y-10 flex-col'
        >
          <input
            type='text'
            className='form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
            placeholder='Your Name'
          />
          <input
            type='email'
            className='form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
            placeholder='Email'
          />
          <input
            type='text'
            className='form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
            placeholder='Subject'
          />
          <textarea
            className='form-control block w-full min-h-[25vh] px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
            placeholder='Message'
          ></textarea>
          <button
            type='submit'
            className='text-white bg-green-600 hover:bg-green-700 w-full focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 block'
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
