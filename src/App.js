import React from "react";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Navbar from "./pages/Navbar";
import Add from "./pages/Add";
import { useState } from "react";
import HTW from "./userPage/HTW"
import FolderFiles from "./cards/FolderFiles";
import SpeechEnhance from "./pages/SpeechEnhance";
import Transcription from "./pages/Transcription";
import Music from "./pages/Music";
import Folders from "./pages/Folders";
import Feedback from "./pages/Feedback";
import FAQ from "./userPage/FAQ";
import Support from "./pages/Support";
import Login from "./pages/Login";
import AllFolders from "./pages/AllFolders";
function App() {
  const [file, setfile] = useState(null);
  const [selected, setselected] = useState(1);
  return (
    <div className="flex h-screen sm:flex-row flex-col-reverse text-white">
      <BrowserRouter>
      <Home  selected={selected} setselected={setselected}/>
      <div  className="flex h-[90%] sm:h-screen w-full sm:w-5/6 flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Add setselected={setselected} setfile={setfile} />}/>
        {file && <Route path="/speech" element={<SpeechEnhance setselected={setselected} file={file} setfile={setfile}/>}/>}
        {file && <Route path="/transcription" element={<Transcription setselected={setselected} file={file} setfile={setfile} />}/>}
        {file && <Route path="/music" element={<Music setselected={setselected} file={file} setfile={setfile} />}/>}
        <Route path="/folders" element={<Folders setselected={setselected}/>} />
        <Route path="/feedback" element={<Feedback />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/how-to-use" element={<HTW/>}/>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/all-folders" element={<AllFolders />}/>
        <Route path="/folders/:folderid" element={<FolderFiles />} />
        <Route path="*" element={<Add  setselected={setselected} setfile={setfile} />}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
