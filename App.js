import React, { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Section } from "./components/section/Section";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Work } from "./components/section/Work";
import { About } from "./components/section/About";
import { Location } from "./components/section/Location";
import { SignUp } from "./components/section/SignUp";
import { Footer } from "./components/footer/Footer";
import { ScrollToTop } from "./components/section/ScrollToTop";

function App() {

  return (
    <BrowserRouter>
      <div className="w-100 h-100">
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Section />}></Route>
          <Route path="/home" element={<Section />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/signin" element={<SignUp />}></Route>
          <Route path="*" element=
            {
              <div className="w-100" style={{height:"600px"}}>
                <h2 className="text-center text-danger my-5">
                  OOPS...Page Not Found[404-Error]
                </h2>
              </div>
            }
          ></Route>
        </Routes>
        <hr />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
