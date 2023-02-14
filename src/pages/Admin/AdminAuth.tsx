import { CgDanger } from 'react-icons/cg';
import { useState } from 'react';
import { BiSave } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Func from '../../helpers/other/functions';
// this page is for admin user to enter a admin password that should be validated in the server and determine if their actions will persist. on user sign in they will be redirected here hen try to navigate to the table.
const AdminAuth = () => {
  const navigate = useNavigate();
  const [adminAuth, setAdminAuth] = useState({
    pass: '',
  });

  const handleSave = () => {
    if (adminAuth.pass.length > 3) {
      sessionStorage.setItem('Admin', JSON.stringify(adminAuth.pass));
      navigate('/admin/menu');
    } else {
      toast.error('Invalid password length');
    }
  };
  return (
    <div className='w-full h-[70vh] relative inset-0 flex items-center justify-center'>
      <div className='px-6 text-center py-20 w-full max-w-lg bg-white rounded-lg shadow-lg'>
        <CgDanger
          className='mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200'
          fill='currentColor'
          stroke='currentColor'
        />

        <div className='col-span-full'>
          <label
            htmlFor='admin_password'
            className='block mb-4 text-sm font-medium text-gray-900'
          >
            Admin Password
          </label>

          <input
            onChange={(e) => Func.onChange(e, (newVal) => setAdminAuth(newVal))}
            name='pass'
            type='password'
            className='form-control block w-full px-4 py-2 my-5  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
            placeholder='Password'
          />
          <button
            // attempts the send the updates to the backend
            onClick={handleSave}
            className='ml-0 flex justify-center mt-5 items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-gray-500 px-12 py-2 text-lg text-white'
          >
            <BiSave
              stroke='currentColor'
              fill='currentColor'
              height='1em'
              width='1em'
            />{' '}
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
