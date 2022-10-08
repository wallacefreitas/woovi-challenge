import React from 'react'
import ReactDOM from 'react-dom/client'
import { RelayEnvironmentProvider } from 'react-relay'
import { Provider } from 'react-redux';

import App from './App'
import RelayEnvironment from './RelayEnvironment';
import store from './store';

import "./styles/main.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Provider store={store}>
        <div className='flex flex-col h-screen'>
          <App />
        </div>
      </Provider>
    </RelayEnvironmentProvider>
  </React.StrictMode>
)
