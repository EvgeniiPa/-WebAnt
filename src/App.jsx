import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Characters from "./components/Charcters/Characters";
import Episodes from "./components/Episodes/Episodes";
import Locations from "./components/Locations/Locations";
import CharactersDetails from "./components/Charcters/CharactersDetails/CharacterDetails";
import LocationDetails from "./components/Locations/LocationsDetails/LocationDetails";
import EpisodesDetails from "./components/Episodes/EpisodesDetails/EpisodesDetails";
import { MyProvider } from "./components/Context/Context";

function App() {
  return (
    <MyProvider> 
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Characters />} />
          <Route path="character/:id" element={<CharactersDetails />} />
          <Route path="location/:id" element={<LocationDetails/>}/>
          <Route path="episode" element={<Episodes />} />
          <Route path="location" element={<Locations />} />
          <Route path="episode/:id" element={<EpisodesDetails/>}/>
        </Route>
      </Routes>
    </MyProvider>
  );
}

export default App;
