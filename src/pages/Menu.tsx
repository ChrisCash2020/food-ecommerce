import Main from '../components/Other/Main';
import Section from '../components/Other/Section';
import { menu } from '../helpers/other/config';
import { useAppDispatch } from '../helpers/hooks/hooks';
import { categoryFilter } from '../helpers/slices/other/filterSlice';

const Menu = () => {
  const dispatch = useAppDispatch();
  dispatch(categoryFilter('Menu'));
  return (
    <>
      {/* @ts-ignore */}
      <Section array={menu.tabs} title={menu.title} slider={menu.slider} />
      <Main location='menu' />
    </>
  );
};
export default Menu;
