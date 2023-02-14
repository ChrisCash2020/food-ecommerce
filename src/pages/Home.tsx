import Header from '../components/Other/Header';
import Main from '../components/Other/Main';
import Section from '../components/Other/Section';
import { fruits, header, menu } from '../helpers/other/config';
const Home = () => {
  return (
    <>
      <Header left={header.left} right={header.right} />
      <Section
        //@ts-ignore
        title={fruits.title}
        slider={fruits.slider}
      />
      {/* @ts-ignore */}
      <Section array={menu.tabs} title={menu.title} slider={menu.slider} />
      <Main location='' />
    </>
  );
};

export default Home;
