import { MdEdit } from 'react-icons/md/index.js';
import { CgUndo } from 'react-icons/cg/index.js';

import * as Func from '../../helpers/other/functions';
import { useState, useLayoutEffect } from 'react';
import { useAppSelector } from '../../helpers/hooks/hooks';
import { RootState } from '../../helpers/other/store';
const EditInput = ({
  input,
  setState,
  initialValue,
}: {
  input: { name: string; type: string };
  setState: any;
  initialValue: string | number;
}) => {
  // the input just olds the name and type of input
  // the setState prop is the state obj provided that olds the records that the onChange function will alter
  const [undo, setUndo] = useState(true);
  const restInputs = useAppSelector(
    (state: RootState) => state.admin.resetInputs
  );
  const reset = () => {
    setState((s: any) => ({ ...s, [input.name]: undefined }));
  };
  useLayoutEffect(() => {
    setUndo(true);
    reset();
  }, [restInputs]);
  return (
    <>
      {undo && <p className='pl-1 w-full h-full'>{initialValue}</p>}
      {!undo && (
        <input
          onChange={(e) => Func.onChange(e, setState)}
          name={input.name}
          type={input.type}
          className='h-full w-full  bg-transparent pl-1 text-textColor outline-none  rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-600 border-1'
          autoFocus
        />
      )}
      {/* toggle button for show where input can be edited  */}
      <button
        className='hover:text-orange-600 text-xl'
        onClick={() => {
          setUndo((state) => !state);
          reset();
        }}
      >
        <>
          {undo ? (
            <MdEdit
              stroke='currentColor'
              fill='currentColor'
              className='h-5 w-5'
            />
          ) : (
            <CgUndo
              stroke='currentColor'
              fill='currentColor'
              className='h-5 w-5 '
            />
          )}
        </>
      </button>
    </>
  );
};

export default EditInput;
