import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FavoritesContextProvider} from './store/favorite-context';

ReactDOM.render(
    <FavoritesContextProvider>
          
            <App />
          
     
    </FavoritesContextProvider>
    ,document.getElementById('root')
    );


document.addEventListener("DOMContentLoaded", function(event) {
    var prevScrollpos = window.pageYOffset;

    /* Get the header element and it's position */
    var headerDiv = document.querySelector("header");
    var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;
    
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
    
      /* if scrolling down, let it scroll out of view as normal */
      if (prevScrollpos <= currentScrollPos ){
          headerDiv.classList.remove("fixedToTop");
          headerDiv.style.top ="-7.2rem";
      }
      /* otherwise if we're scrolling up, fix the nav to the top */
      else{  
          headerDiv.classList.add("fixedToTop");
          headerDiv.style.top = "0";
      }
    
      prevScrollpos = currentScrollPos;
    }
});
    