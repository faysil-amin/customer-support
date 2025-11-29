import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Conastractor/Navbar/Navbar";
import CoundBoxs from "./Conastractor/CoundBoxs/CoundBoxs";
import BackgroundColor from "./Conastractor/BackgroundColor/BackgroundColor";
import Containbox from "./Conastractor/Containbox/Containbox";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <BackgroundColor>
        <CoundBoxs></CoundBoxs>
        <Containbox></Containbox>
      </BackgroundColor>
      <ToastContainer />
    </>
  );
}

export default App;
