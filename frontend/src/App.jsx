import React from "react";
import ShoppingPage from "../src/client/user/pages/shoppingPage";
import LoginPage from "./client/user/pages/loginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<ShoppingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
