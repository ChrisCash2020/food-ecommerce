import { HiOutlineXMark } from 'react-icons/hi2';
import { editProductBody } from '../../../helpers/other/types';
import { useState, useLayoutEffect } from 'react';
import EditInput from '../../Update/EditInput';
import EditImg from '../../Update/EditImg';
import EditImgPlaceholder from '../../Update/EditImgPlaceholder';
import EditDropdown from '../../Update/EditDropdown';
import { useAppDispatch, useAppSelector } from '../../../helpers/hooks/hooks';
import {
  editproduct,
  getProducts,
} from '../../../helpers/slices/products/productSlice';
import { RootState } from '../../../helpers/other/store';
import { BiSave } from 'react-icons/bi';
import { ItemModalLoader } from '../../Loaders/ItemModalLoader';
import {
  closeProductModal,
  initialState,
  testProductEdit,
} from '../../../helpers/other/functions';
import {
  getEditProduct,
  toggleLoaderModal,
} from '../../../helpers/slices/admin/adminSlice';
import { toast } from 'react-toastify';

const EditProductModal = () => {
  const dispatch = useAppDispatch();

  // gets the specified product user clicks on to be editted

  const product = useAppSelector(getEditProduct);
  const showEditProductModal = useAppSelector(
    (state: RootState) => state.admin.showEditProductModal
  );
  const showLoaderModal = useAppSelector(
    (state: RootState) => state.admin.loadingModal
  );
  const [productBody, setProductBody] = useState<editProductBody>(initialState);

  // categories for the edit dropdown

  const categories = [
    'Fruits',
    'Burgers',
    'Drinks',
    'Sides',
    'Ice Cream',
    'Fish',
    'Rice',
    'Meats',
  ];

  // get the input info for the edit components
  const inputArr: any = [
    { name: 'title', type: 'text' },
    { name: 'detail', type: 'text' },
    { name: 'category', list: categories },
    { name: 'price', type: 'number' },
    { name: 'stock', type: 'number' },
  ];

  function handleClose() {
    closeProductModal('#ItemModal', setProductBody, dispatch);
  }
  useLayoutEffect(() => {
    // unknown reason for bug but need to fetch for products or page won't load 🥴
    dispatch(getProducts());
  }, []);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // will put the product state and fetched product info in the test function if it pass then send to backend
    if (testProductEdit(productBody, product)) {
      const id = toast.loading('Uploading...', {
        position: 'top-center',
        autoClose: 1000,
      });
      dispatch(toggleLoaderModal(true));
      dispatch(editproduct(productBody)).then(() => {
        dispatch(toggleLoaderModal(true));
        setTimeout(() => {
          closeProductModal('#ItemModal', setProductBody, dispatch);
          dispatch(toggleLoaderModal(false));
          toast.update(id, {
            render: 'Revision Successful',
            type: 'success',
            isLoading: false,
            position: 'top-center',
            autoClose: 1000,
          });
        }, 300);
        dispatch(getProducts());
      });
    }
  };
  return (
    <>
      {product ? (
        <div
          id='ItemModalOverlay'
          className={`fixed min-h-screen w-screen z-[1000] inset-0 bg-black bg-opacity-30 flex justify-center duration-1000 transition-all items-center ${
            showEditProductModal ? '' : 'hidden'
          }`}
        >
          {/* <!-- Modal content --> */}
          {showLoaderModal ? (
            <ItemModalLoader text='Saving' id='ItemModal' />
          ) : (
            <div
              id='ItemModal'
              className='opacity-0 duration-300 transition-all transform -translate-y-full  relative w-full max-w-lg 
            bg-white rounded-lg shadow-lg'
            >
              {/* <!-- Modal header --> */}
              <div className='flex items-start justify-between p-4 border-b rounded-t '>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Product Revision
                </h3>
                <button
                  type='button'
                  onClick={handleClose}
                  className='text-gray-800 bg-transparent hover:bg-[#ff4500]  hover:text-white rounded-lg text-md p-1.5 ml-auto inline-flex items-center'
                >
                  <HiOutlineXMark className='h-5 w-5' />
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className='p-6 space-y-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3 w-full'>
                    <label
                      htmlFor='title'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Title
                    </label>
                    <div className='w-full py-3 border-b border-green-300 flex items-center gap-2'>
                      <EditInput
                        input={inputArr[0]}
                        setState={(val: any) => setProductBody(val)}
                        initialValue={product.title}
                      />
                    </div>
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Detail
                    </label>
                    <div className='w-full py-3 border-b border-green-300 flex items-center gap-2'>
                      <EditInput
                        input={inputArr[1]}
                        setState={(val: any) => setProductBody(val)}
                        initialValue={product.detail || ''}
                      />
                    </div>
                  </div>
                  <div className='col-span-2'>
                    <label
                      htmlFor='phone-number'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Category
                    </label>
                    <div className='w-full py-3 border-b border-green-300 flex items-center gap-2'>
                      <EditDropdown
                        input={inputArr[2]}
                        setState={(val: any) => setProductBody(val)}
                        initialValue={product.category}
                      />
                    </div>
                  </div>
                  <div className='col-span-2'>
                    <label
                      htmlFor='phone-number'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Price
                    </label>
                    <div className='w-full py-3 border-b border-green-300 flex items-center gap-2'>
                      <EditInput
                        input={inputArr[3]}
                        setState={(val: any) => setProductBody(val)}
                        initialValue={product.price}
                      />
                    </div>
                  </div>
                  <div className='col-span-2'>
                    <label
                      htmlFor='department'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Stock
                    </label>
                    <div className='w-full py-3 border-b border-green-300 flex items-center gap-2'>
                      <EditInput
                        input={inputArr[4]}
                        setState={(val: any) => setProductBody(val)}
                        initialValue={product.stock}
                      />
                    </div>
                  </div>
                  <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 max-w-2xl h-[125px]  md:h-[230px] round-lg col-span-full'>
                    {/* the conditon is predicated on the body image bc the user doesn't alter the at any point */}
                    {productBody.img != '' ? (
                      /* the EditImg as a delete btn changes the body.img state which calls the conditional and sets the active element to the placeholder  */
                      <EditImg
                        setState={(val: any) => setProductBody(val)}
                        baseImg={product.img}
                        newImg={productBody.img}
                      />
                    ) : (
                      /* the EditImgPlaceholder has a file input btn that when a valid file is present the the body img state is changed and the calls the conditional and sets the active element to the placeholder  */
                      <EditImgPlaceholder
                        setState={(val: any) => setProductBody(val)}
                      />
                    )}
                  </div>
                </div>
              </div>
              {/* <!-- Modal footer --> */}
              <div className='flex items-center p-6 space-x-2 border-t border-green-200 rounded-b'>
                <button
                  onClick={onSubmit}
                  // attempts the send the updates to the backend
                  className='ml-0 flex justify-center items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-gray-500 px-12 py-2 text-lg text-white'
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
          )}
        </div>
      ) : null}
    </>
  );
};

export default EditProductModal;
