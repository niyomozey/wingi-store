import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux'
import rootReducer from './store/RootReducer/rootReducer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = createStore(rootReducer)
root.render(
    <Provider store={store} >      
      <App />
    </Provider>
);

reportWebVitals();
