import React from 'react';
import './App.css';
import Header from './components/Header';
import cherryBlossom from '../public/cherryBlossom.jpeg'


function App() {
  return (
    <div styles={{backgroundImage: `url(${cherryBlossom})`}}>  
        <Header/>
    </div>
  );
}

export default App;
