import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Conastractor/Navbar/Navbar";
import CoundBoxs from "./Conastractor/CoundBoxs/CoundBoxs";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <CoundBoxs></CoundBoxs>
      <ToastContainer />
    </>
  );
}

export default App;
