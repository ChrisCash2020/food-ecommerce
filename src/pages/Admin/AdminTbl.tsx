import { ProductTools } from '../../components/Admin/ProductTools';
import { useAppSelector } from '../../helpers/hooks/hooks';
import { getMenuEdit } from '../../helpers/slices/products/productSlice';
import ProductBody from '../../components/Admin/ProductRow/ProductBody';
import ProductHead from '../../components/Admin/ProductHead';
import { useState, useEffect } from 'react';
import { sortArrayOfProducts } from '../../helpers/other/functions';
import EditProductModal from '../../components/Admin/ProductModal/EditProductModal';
import AddProductModal from '../../components/Admin/ProductModal/AddProductModal';
import DelProductModal from '../../components/Admin/ProductModal/DelProductModal';
import { useNavigate } from 'react-router-dom';

const AdminTbl = () => {
  const menuEditItems = useAppSelector(getMenuEdit);
  // the product head contains this set state
  const [sort, setSort] = useState({ property: 'title', toggle: true });
  // function to get an array based on the sort state
  const sortedMenuItems = sortArrayOfProducts(menuEditItems, sort);
  const navigate = useNavigate();
  useEffect(() => {
    // if the sessionStorage doesn't have a Admin item this page will redirect to the AdminAuth untill this changes
    if (!sessionStorage.getItem('Admin')) {
      navigate('/admin/auth');
    }
  }, []);
  return (
    <div>
      <EditProductModal />
      <AddProductModal />
      <DelProductModal />

      <div className='flex relative items-center justify-center overflow-x-auto mt-3'>
        <table className='w-fit text-sm text-left max-[845px]:flex max-[845px]:flex-row max-[845px]:w-screen text-gray-700'>
          <ProductHead setSort={(val: any) => setSort(val)} />
          <tbody className='mx-auto'>
            {sortedMenuItems.map((item) => (
              <ProductBody item={item} />
            ))}
          </tbody>
        </table>
      </div>
      <ProductTools />
    </div>
  );
};

export default AdminTbl;
