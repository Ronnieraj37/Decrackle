import React from "react";
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Home from "./pages/Home"
import Navbar from "./pages/Navbar";
import Add from "./pages/Add";
import { useState } from "react";
import Footer from "./components/Footer";
import SpeechEnhance from "./pages/SpeechEnhance";
function App() {
  const [file, setfile] = useState(null);
  const [selected, setselected] = useState(1);
  return (
    <div className="flex text-white">
      <BrowserRouter>
      <Home selected={selected} setselected={setselected}/>
      <div  className="flex w-5/6 flex-col bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Add setselected={setselected} setfile={setfile} />}/>
        {file && <Route path="/speech" element={<SpeechEnhance setselected={setselected} file={file} setfile={setfile}/>}/>}
        <Route path="*" element={<Add setfile={setfile} />}/>
      </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
