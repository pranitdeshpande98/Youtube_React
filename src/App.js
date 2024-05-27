import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
