import { useLayoutEffect } from 'react';
import { CgDanger } from 'react-icons/cg';
import { useAppDispatch, useAppSelector } from '../../../helpers/hooks/hooks';
import { closeProductModal } from '../../../helpers/other/functions';
import { RootState } from '../../../helpers/other/store';
import {
  getProductSet,
  toggleLoaderModal,
} from '../../../helpers/slices/admin/adminSlice';
import {
  deleteProducts,
  getProducts,
} from '../../../helpers/slices/products/productSlice';
import { toast } from 'react-toastify';
import { ItemModalLoader } from '../../Loaders/ItemModalLoader';
const DelProductModal = () => {
  const dispatch = useAppDispatch();
  const showConfirmDelModal = useAppSelector(
    (state: RootState) => state.admin.confirmDel
  );
  const showLoaderModal = useAppSelector(
    (state: RootState) => state.admin.loadingModal
  );
  function handleClose() {
    closeProductModal('#DelItemModal', undefined, dispatch);
  }
  useLayoutEffect(() => {
    // unknown reason for bug but the close product modal won't do the transition 🥴
    if (showConfirmDelModal == true) {
      const itemModal = document.querySelector('#DelItemModal');
      setTimeout(() => {
        itemModal?.classList.remove('opacity-0');
        itemModal?.classList.remove('-translate-y-full');
      }, 100);
    }
  }, [showConfirmDelModal]);
  const delSet = useAppSelector(getProductSet);
  const lenDelSet = delSet.length;
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const id = toast.loading('Deleting...', {
      position: 'top-center',
      autoClose: 1000,
    });
    dispatch(toggleLoaderModal(true));
    dispatch(deleteProducts(delSet))
      .then(() => {
        dispatch(toggleLoaderModal(true));
        setTimeout(() => {
          closeProductModal('#DelItemModal', undefined, dispatch);
          dispatch(toggleLoaderModal(false));
          toast.update(id, {
            render: 'Product(s} Deleted',
            type: 'success',
            isLoading: false,
            position: 'top-center',
            autoClose: 1000,
          });
        }, 300);
        dispatch(getProducts());
      })
      .catch(() => {
        toast.error('Something went horibbly wrong');
      });
  };
  console.log(delSet);
  return (
    <>
      {showConfirmDelModal && (
        <div
          id='DelItemModalOverlay'
          className={`fixed min-h-screen w-screen z-[1000] inset-0 bg-black bg-opacity-30 flex justify-center duration-1000 transition-all items-center`}
        >
          {/* <!-- Modal content --> */}
          {showLoaderModal ? (
            <ItemModalLoader text='Uploading' id='AddItemModal' />
          ) : (
            <div
              id='DelItemModal'
              className='p-6 text-center opacity-0 duration-300 transition-all transform -translate-y-full  relative w-full max-w-lg 
            
            bg-white rounded-lg shadow-lg'
            >
              <CgDanger
                className='mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200'
                fill='currentColor'
                stroke='currentColor'
              />
              {lenDelSet > 1 ? (
                <h3 className='my-12 text-lg font-normal text-gray-500 dark:text-gray-400'>
                  Are you sure you want to delete {lenDelSet} products?
                </h3>
              ) : (
                <h3 className='my-12 text-lg font-normal text-gray-500 dark:text-gray-400'>
                  Are you sure you want to delete this product?
                </h3>
              )}

              <button
                onClick={onSubmit}
                type='button'
                className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'
              >
                Yes, I'm sure
              </button>
              <button
                onClick={handleClose}
                type='button'
                className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
              >
                No, cancel
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DelProductModal;
