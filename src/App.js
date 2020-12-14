import React from 'react'
import { Provider } from 'react-redux';
import {configureStore} from './store/store'
import Routes from './routes';

function App() {
  return (
    <Provider store={configureStore()}>
      <Routes/>
    </Provider>
  );
}

export default App;
