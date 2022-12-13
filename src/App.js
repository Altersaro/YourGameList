import './App.css';
import React from 'react';
import Pages from './Pages';
import Sidebar from "./sidebar/Sidebar";
import { ElementProvider } from '../src/ClientApi'
import {BrowserRouter} from 'react-router-dom'
import ScrollButton from './scrollButton/ScrollButton'





function App() {




  return (
    <BrowserRouter>
        <ElementProvider>
          <div className='row flex-nowrap'>
            <Sidebar/>
            <Pages/>
            <ScrollButton/>
          </div>
        </ElementProvider>
  </BrowserRouter>

  );
}

export default App;
