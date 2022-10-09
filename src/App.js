import { useState } from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";
import MainNavigation from './components/layout/MainNavigation.js';



function App() {
  return (
    
    <BrowserRouter>
    <MainNavigation />
    <Layout>
      <Routes>
        <Route exact path='/' element={ <AllMeetupsPage />}>
          
        </Route>
        <Route path='/new-meetup' element={   <NewMeetupsPage />}>
        
        </Route>
        <Route path='/favorites' element={  <FavoritesPage />}>
         
        </Route>
      </Routes>
      </Layout>
      </BrowserRouter>
      
    
  );
}


  

export default App;
