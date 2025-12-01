import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Conastractor/Navbar/Navbar";
import CoundBoxs from "./Conastractor/CoundBoxs/CoundBoxs";
import BackgroundColor from "./Conastractor/BackgroundColor/BackgroundColor";
import Containbox from "./Conastractor/Containbox/Containbox";
import { Suspense, useState } from "react";
const customerApi = async () => {
  const api = await fetch("Customer.json");
  return api.json();
};
const customer = customerApi();

function App() {
  const [api, setApi] = useState(customer);
  const [reachiv, setReachiv] = useState([]);
  const [resolve, setResolve] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <BackgroundColor>
        <CoundBoxs reachiv={reachiv} resolve={resolve}></CoundBoxs>
        <Suspense
          fallback={
            <div className="flex items-center justify-center">
              <span className="loading loading-dots loading-xl"></span>
            </div>
          }
        >
          <Containbox
            api={api}
            reachiv={reachiv}
            setReachiv={setReachiv}
            setApi={setApi}
            resolve={resolve}
            setResolve={setResolve}
          ></Containbox>
        </Suspense>
      </BackgroundColor>
      <ToastContainer />
    </>
  );
}

export default App;
