import './App.css';
import React from 'react';
import Pages from './Pages';
import Navbar from "./navbar";
import { ElementProvider } from '../src/ClientApi'
import {BrowserRouter} from 'react-router-dom'


function App() {



  return (
  <BrowserRouter>
    <ElementProvider>
        <div className='row flex-nowrap'>
          <Navbar/>
          <Pages/>
        </div>
    </ElementProvider>
  </BrowserRouter>

  );
}

export default App;
