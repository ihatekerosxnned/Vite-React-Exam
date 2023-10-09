import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import Homepage from "./Pages/Homepage/Homepage";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App(){
  return(
    <>
    <Homepage />
    </>
  );
}
export default App;