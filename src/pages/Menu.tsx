import Main from '../components/Main'
import Section from '../components/Section'
import { main, menu } from '../helpers/config'

const Menu = ({ page }: { page: boolean }) => {
  return (
    <>
      {page ? (
        <div>
          <div className='px-6 max-w-screen'>
            <Section
              array={menu.tabs}
              title={menu.title}
              slider={menu.slider}
            />
            <Main arr={main.foods} />
          </div>
        </div>
      ) : (
        <>
          <Section array={menu.tabs} title={menu.title} slider={menu.slider} />
          <Main arr={main.foods} />
        </>
      )}
    </>
  )
}
export default Menu
