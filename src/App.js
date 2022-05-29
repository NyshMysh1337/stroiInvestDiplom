import React from "react";
import './App.css';
import Contact from "./pages/Contact/Contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/Header";
import Glavnai from "./pages/Glavnai";
import Podrobnee from "./pages/Podrobnee/Podrobnee";
import Comment from "./pages/Comment/Comment";
import About from "./pages/About/About";
import ProjectHome from "./pages/ProjectHome/ProjectHome";


function App() {
  return (

      <BrowserRouter>
                <Header />
                <Routes>
                     <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/home' element={<Glavnai/>}/>
                    <Route path='/home/:id' element={<Podrobnee/>}/>
                    <Route path='/comment' element={<Comment/>}/>
                    <Route path='/project' element={<ProjectHome/>}/>
                </Routes>

    </BrowserRouter>
  )

}

export default App;
