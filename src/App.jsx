import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import AllRoutes from "./components/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <SideBar />
      <AllRoutes />
    </>
  );
}

export default App;
