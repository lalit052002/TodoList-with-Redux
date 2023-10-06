import Home from "./Component/contactPage/Home ";
import AddEditContact from './Component/contactPage/AddEditContact'
import View from "./Component/contactPage/View";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <ToastContainer position="top-center" />
          <Routes>
            <Route exact path="/" element={<Home />} />
           <Route path="/addContact" element={<AddEditContact/>} />
            <Route path="/update/:id" element={<AddEditContact/>} />
            <Route path="/view/:id" element={ <View/>} /> 
          </Routes>
        </div>
      </Router>



    </>
  );
}

export default App;
 