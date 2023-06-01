import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './Pages/Home/Home';
import {About} from './Pages/About/About';
import {Cart} from './Pages/Cart/Cart';
import {Orders} from './Pages/Orders/Orders';
import {Collection} from './Containers/Collections/Collections';
import { ContactUs } from './Pages/ContactUs/ContactUs';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Collections' element={<Collection/> }/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Card/:cardId' element={<Cart/>}/>
          <Route path='/Orders' element={<Orders/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

