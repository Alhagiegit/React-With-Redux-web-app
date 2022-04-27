import React, { useReducer } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { Characters } from './pages/characters/characters';
import Favorites from './pages/favourites/favorites';
import { User } from './pages/user/user';

function App() {
  return (
        <div className="parent">
            <div className='products'>
              <Characters/>
            </div>
            <span  className='divider'></span>
            <div  className='loginPreferContainer'>
                <div className='login'>
                  <User/>
                </div>
                <div className='prefer'>
                  <Favorites/>
                </div>
            </div>
        </div>
  );
}

export default App;
