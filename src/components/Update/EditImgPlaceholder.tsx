import { MdCloudUpload } from 'react-icons/md/index.js';
import { useState } from 'react';
import { renameFile, testUpload } from '../../helpers/other/functions';
import { nanoid } from 'nanoid';
const EditImgPlaceholder = ({ setState }: { setState: any }) => {
  const [err, setErr] = useState(false);
  // need a custom onChange for the placeholder
  // 1. to test img size
  // 2. set error state when appropriate
  // 3. alter the setState prop to causing the EditImg componet to be active
  const handleChange = (e: { target: { files: any } }) => {
    const files: File[] = e.target.files;
    // function to check if file is valid
    if (testUpload(files)) {
      setErr(false);
      const newFile = renameFile(files[0], nanoid());
      setState((prev: any) => ({
        ...prev,
        img: URL.createObjectURL(files[0]),
        file: newFile,
      }));
    } else {
      setErr(true);
    }
  };
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <label
        htmlFor='file-upload'
        className='flex flex-col justify-center items-center w-full h-full rounded-lg  cursor-pointer'
      >
        <div className='flex flex-col justify-center items-center pt-5 pb-6 gap-2'>
          <MdCloudUpload className='text-gray-500 text-3xl ' />
          <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
            <span className='font-semibold'>Click here to upload</span>
          </p>
          <p className='text-xs text-gray-500 dark:text-gray-400'>
            {' '}
            PNG, JPG or GIF (MAX. 2MB)
          </p>
          <label className='text-orange-400 text-xs text-center'>
            {err ? 'Invalid File' : ''}
          </label>
        </div>
        <input
          id='file-upload'
          name='uploadimage'
          type='file'
          accept='.png, .jpeg, .jpg'
          className='hidden'
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
export default EditImgPlaceholder;
