import './App.css';
import React from 'react';
import Route from './Route';
import Sidebar from "./components/sidebar/Sidebar";
import { ElementProvider } from '../src/ClientApi'
import {BrowserRouter} from 'react-router-dom'
import ScrollButton from './components/scrollButton/ScrollButton'





function App() {




  return (
    <BrowserRouter>
        <ElementProvider>
          <div className='row flex-nowrap'>
            <Sidebar/>
            <Route/>
            <ScrollButton/>
          </div>
        </ElementProvider>
  </BrowserRouter>

  );
}

export default App;
