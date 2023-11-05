import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import AddItem from "./components/AddItem/AddItem";
import MyBooks from "./components/Book/MyBooks/MyBooks";
import MyAbout from "./components/MyAbout/MyAbout";
import MyBookDetail from "./components/Book/MyBookDetail/MyBookDetail";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/add" element={<AddItem />} exact />
          <Route path="/books" element={<MyBooks />} exact />
          <Route path="/about" element={<MyAbout />} exact />
          <Route path="/books/:id" element={<MyBookDetail />} exact />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </React.Fragment>
  );
}

export default App;
