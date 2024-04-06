import React, {useState, useEffect} from 'react';
import './App.css';
import I18n from '../../utilities/I18n';

function App() {
  const likesCount  = 1422;
  return (
    <div className='card'>

      <select 
        defaultValue={localStorage.getItem("lang")}
        onChange={(e) => {
            localStorage.setItem("lang",(e.target.value));
            window.location.reload();
        }}
        className='select-menu'
      >
        <option value='en'> English </option>
        <option value='hi'> Hindi </option>
        <option value='mr'> Marathi </option>
        <option value='fr'> French </option>
      </select>
      
      <p className='card-title'> {I18n("title")} </p>

      <p className='tagline'> {I18n("tagline")} </p>

      <p className='info'> {I18n("info")}  </p>

      <p className='greeting'> {I18n("greeting")}  </p>

      <p className='likes'>💜{I18n('likes', "<likesCount>", likesCount)}</p>
    </div>
  )
}

export default App
