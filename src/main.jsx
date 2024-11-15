import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from './galleryState';


const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  }
});


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
