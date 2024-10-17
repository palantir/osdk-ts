import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";
import MapComponent from "./MapComponent.js";
import { useSubscribe } from "./useSubscribe.tsx";

interface Coordinates {
  lat: number;
  lng: number;
}

function App() {
  return (
    <div>
      <MapComponent />
    </div>
  );
}

export default App;
