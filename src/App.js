import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserDetail from "./UserDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:loginID" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
