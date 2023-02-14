import { MdEdit } from 'react-icons/md/index.js';
import { CgUndo } from 'react-icons/cg/index.js';

import * as Func from '../../helpers/other/functions';
import { useState, useLayoutEffect } from 'react';
import { useAppSelector } from '../../helpers/hooks/hooks';
import { RootState } from '../../helpers/other/store';
const EditDropdown = ({
  input,
  setState,
  initialValue,
}: {
  input: { name: string; list: string[] };
  setState: any;
  initialValue: string | number;
}) => {
  // the input just olds the name and type of input
  // the setState prop is the state obj provided that olds the records that the onChange function will alter
  const [selectedOption, setSelectedOption] = useState(initialValue);

  const [undo, setUndo] = useState(true);
  const restInputs = useAppSelector(
    (state: RootState) => state.admin.resetInputs
  );
  const onChange = (e: {
    preventDefault(): unknown;
    target: { name: any; value: any; files?: any };
  }) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
    setSelectedOption(value);
  };
  const reset = () => {
    setState((s: any) => ({ ...s, [input.name]: undefined }));
    setSelectedOption(initialValue);
  };
  // The restInputs state is triggered on closing inorder to reset the form state
  useLayoutEffect(() => {
    setUndo(true);
    reset();
  }, [restInputs]);
  return (
    <>
      {undo && <p className='pl-1 w-full h-full'>{initialValue}</p>}
      <select
        disabled={undo}
        className={`h-full w-full  bg-transparent pl-1 text-textColor outline-none  rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-600 border-1 ${
          undo ? 'hidden' : ''
        }`}
        value={selectedOption}
        name={input.name}
        onChange={onChange}
      >
        {input.list.map((val) => {
          if (initialValue == val) {
            return (
              <option value={val} selected>
                {val}
              </option>
            );
          } else {
            return <option value={val}>{val}</option>;
          }
        })}
      </select>
      {/* toggle button for show where input can be edited  */}
      <button
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
              className='text-xl h-5 w-5 text-gray-600'
            />
          ) : (
            <CgUndo
              stroke='currentColor'
              fill='currentColor'
              className='text-xl h-5 w-5 text-gray-600'
            />
          )}
        </>
      </button>
    </>
  );
};

export default EditDropdown;
