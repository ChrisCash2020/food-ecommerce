import { FaTrash } from 'react-icons/fa/index.js';
const EditImg = ({
  newImg,
  baseImg,
  setState,
}: {
  baseImg: string;
  newImg: string;
  setState: any;
}) => {
  // classes prop for custom classes of the image
  // the newImg prop to display the new Img
  // the setState to alter the parent componet conditional
  return (
    <div className='relative h-full w-fit flex items-center justify-center'>
      {/* condition to test if a new image is added  */}
      {/* a valid newImg would start with blob because of the URL function */}
      {newImg.startsWith('blob') ? (
        <img
          src={`${newImg}`}
          loading='lazy'
          alt='uploaded img'
          className='w-full h-4/5 max-w-[288px] object-cover'
        />
      ) : (
        <img
          src={`${baseImg}`}
          loading='lazy'
          alt='uploaded img'
          className='w-full h-4/5 max-w-[288px] object-cover'
        />
      )}
      <button
        // on click the parent componet conditional displays the placeholder
        onClick={() => setState((prev: any) => ({ ...prev, img: '' }))}
        title='Remove Photo'
        className='absolute bottom-3 right-3 rounded-full p-2 md:p-5 bg-green-600 hover:bg-green-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out'
      >
        <FaTrash
          stroke='currentColor'
          fill='currentColor'
          className='text-white'
          height='1em'
          width='1em'
        />
      </button>
    </div>
  );
};

export default EditImg;
