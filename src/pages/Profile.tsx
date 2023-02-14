import { BsPersonFill } from 'react-icons/bs/index.js';
import { BiSave } from 'react-icons/bi/index.js';
import { profile } from '../helpers/other/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../helpers/other/store';
import { useState, useEffect } from 'react';
import EditImg from '../components/Update/EditImg';
import { toast } from 'react-toastify';
import {
  editCredentials,
  getCredentials,
  getUser,
} from '../helpers/slices/auth/authSlice';
import EditInput from '../components/Update/EditInput';
import EditImgPlaceholder from '../components/Update/EditImgPlaceholder';
import ProfileLoader from '../components/Loaders/ProfileLoader';
import { testCredEdit } from '../helpers/other/functions';
import { ImSpinner3 } from 'react-icons/im';
const Profile = () => {
  const dispatch: AppDispatch = useDispatch();
  const user: profile = useSelector((state: RootState) => state.auth.user);
  // this is the state obj that will be altered
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState({
    username: undefined,
    img: 'something',
    file: undefined,
    token: '',
  });
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (testCredEdit(body)) {
      // 4. the previous test don't account for soley an undefined username
      // test if the username is undefined and use the initial value if true
      const newBody: any = {};
      newBody.username =
        body.username == undefined ? user.username : body.username;
      if (body.file != undefined) newBody.img = body.file;
      // extra check don't know if needed 😓
      dispatch(editCredentials(newBody));
      setLoading(true);
    }
  };
  const inputInfo = { name: 'username', type: 'text' };
  useEffect(() => {
    if (user.username == undefined) {
      console.log('test');
      setTimeout(() => {
        dispatch(getCredentials());
        setLoading(false);
      }, 1000);
    }
  }, [user]);
  return (
    <>
      {user.username ? (
        <div className='w-full md:py-10 h-full flex items-center justify-center'>
          <div className='border w-full  max-w-lg  shadow-lg bg-white  flex border-gray-300 items-center rounded-lg p-4 flex-col justify-center gap-4  mt-8 mg:mt-10'>
            <div className='w-full py-3 border-b border-gray-300 flex items-center gap-2'>
              <BsPersonFill
                stroke='currentColor'
                fill='currentColor'
                className='h-7 w-7 text-gray-600'
              />
              <EditInput
                input={inputInfo}
                setState={(val: any) => setBody(val)}
                initialValue={user.username}
              />
            </div>
            <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[225px]  md:h-[420px] round-lg'>
              <>
                {/* the conditon is predicated on the body image bc the user doesn't alter the at any point */}
                {body.img != '' ? (
                  /* the EditImg as a delete btn changes the body.img state which calls the conditional and sets the active element to the placeholder  */
                  <EditImg
                    setState={(val: any) => setBody(val)}
                    baseImg={user.img}
                    newImg={body.img}
                  />
                ) : (
                  /* the EditImgPlaceholder has a file input btn that when a valid file is present the the body img state is changed and the calls the conditional and sets the active element to the placeholder  */
                  <EditImgPlaceholder setState={(val: any) => setBody(val)} />
                )}
              </>
            </div>
            <div className='w-full flex items-center justify-center'>
              <button
                // attempts the send the updates to the backend
                onClick={onSubmit}
                className='ml-0 flex justify-center items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-gray-500 px-12 py-2 text-lg text-white'
              >
                {loading ? (
                  <>
                    <ImSpinner3
                      stroke='currentColor'
                      fill='currentColor'
                      height='1em'
                      width='1em'
                      className='animate-spin'
                    />
                    Saving
                  </>
                ) : (
                  <>
                    <BiSave
                      stroke='currentColor'
                      fill='currentColor'
                      height='1em'
                      width='1em'
                    />{' '}
                    Save
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ProfileLoader />
      )}
    </>
  );
};
export default Profile;
