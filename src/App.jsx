import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Conastractor/Navbar/Navbar";
import CoundBoxs from "./Conastractor/CoundBoxs/CoundBoxs";
import BackgroundColor from "./Conastractor/BackgroundColor/BackgroundColor";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <BackgroundColor>
        <CoundBoxs></CoundBoxs>
      </BackgroundColor>
      <ToastContainer />
    </>
  );
}

export default App;
