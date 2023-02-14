import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import SideBar from '../components/Other/SideBar';
import { foot, nav } from '../helpers/other/config';
import About from './About';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import _Error from './_Error';
import { RootState } from '../helpers/other/store';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Register';
import { getCredentials, getUser } from '../helpers/slices/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../helpers/hooks/hooks';
import Menu from './Menu';
import { getProducts } from '../helpers/slices/products/productSlice';
import _404 from '../components/Other/_404';
import _404Gif from './assets/404.gif';
import NavModal from '../components/Nav/NavModal';
import AdminTbl from './Admin/AdminTbl';
import AdminAuth from './Admin/AdminAuth';
function App() {
  const dispatch = useAppDispatch();
  const showNavModal = useAppSelector((state: RootState) => state.modal.nav);
  const user = useAppSelector(getUser);
  useEffect(() => {
    dispatch(getCredentials());
    dispatch(getProducts());
  }, []);
  return (
    <>
      <BrowserRouter>
        <div>
          {showNavModal ? <NavModal nav={nav} /> : <></>}
          <Nav nav={nav} />
          <SideBar type={'cart'} />
          <SideBar type={'contact'} />

          <div className='px-6 w-screen'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/menu' element={<Menu />} />
              <Route
                path='/admin/menu'
                element={
                  user != null ? (
                    user.role == 'ADMIN' ? (
                      <AdminTbl />
                    ) : (
                      <_Error text='Unauthorized Access' />
                    )
                  ) : (
                    <_Error text='Unauthorized Access' />
                  )
                }
              />
              <Route
                path='/admin/auth'
                element={
                  user != null ? (
                    user.role == 'ADMIN' ? (
                      <AdminAuth />
                    ) : (
                      <_Error text='Unauthorized Access' />
                    )
                  ) : (
                    <_Error text='Unauthorized Access' />
                  )
                }
              />
              <Route
                path='/login'
                element={
                  user == null ? <Login /> : <_Error text='Already Logged In' />
                }
              />
              <Route
                path='/register'
                element={
                  user == null ? (
                    <Register />
                  ) : (
                    <_Error text='Already Logged In' />
                  )
                }
              />
              <Route
                path='/profile'
                element={
                  user != null ? <Profile /> : <_Error text='Not Logged In' />
                }
              />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<_Error />} />
            </Routes>
            <Footer title={foot.title} logo={foot.logo} links={foot.links} />
          </div>
        </div>
      </BrowserRouter>
      <ToastContainer
        position='top-left'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}
export default trackWindowScroll(App);
