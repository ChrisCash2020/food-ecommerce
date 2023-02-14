import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { store } from './helpers/other/store';
import { Provider } from 'react-redux';
import './index.css';
ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
