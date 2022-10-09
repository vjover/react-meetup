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



function App() {
  return (
    <Layout>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <AllMeetupsPage />}>
          
        </Route>
        <Route path='/new-meetup' element={   <NewMeetupsPage />}>
        
        </Route>
        <Route path='/favorites' element={  <FavoritesPage />}>
         
        </Route>
      </Routes>
      </BrowserRouter>
    </Layout>
  );
}


  

export default App;
