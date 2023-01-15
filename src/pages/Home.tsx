import Header from '../components/Header'
import Section from '../components/Section'
import { fruits, header } from '../helpers/config'
import Menu from './Menu'

const Home = () => {
  return (
    <>
      <Header left={header.left} right={header.right} />
      <Section
        array={fruits.foods}
        title={fruits.title}
        slider={fruits.slider}
      />
      <Menu page={false} />
    </>
  )
}

export default Home
