import { Food } from '../../../helpers/other/types';
import { useAppDispatch } from '../../../helpers/hooks/hooks';
import FullScreenRow from './FullScreenRow';
import MobileScreenRow from './MobileScreenRow';
import { openProductModal } from '../../../helpers/other/functions';
const ProductBody = ({ item }: { item: Food }) => {
  const dispatch = useAppDispatch();
  const handleOpen = () => {
    openProductModal(item.index, '#ItemModal', dispatch);
  };
  // the body of the admin table it will make a row for each product. one or the other components will be rendered based on the screen size
  return (
    <>
      <FullScreenRow item={item} handleOpen={handleOpen} />
      {/* mobile view */}
      <MobileScreenRow item={item} handleOpen={handleOpen} />
    </>
  );
};

export default ProductBody;
