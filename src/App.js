import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import OpretKonto from "./components/OpretKonto/OpretKonto";
import Admin from "./components/Administration/Admin";
import Bruger from "./components/Bruger/Bruger";
import Butik from "./components/Butik/Butik";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

        {/* <OpretKonto/> */}
        {/* <Admin/> */}
        {<Navbar/>}
        {/* <Bruger/> */}
        {/* <Butik/> */}

    </div>
  );
}

export default App;
