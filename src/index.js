import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import {FavoritesContextProvider} from './store/favorite-context';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <FavoritesContextProvider>
          
            <App />
          
     
    </FavoritesContextProvider>
    ,document.getElementById('root')
    );