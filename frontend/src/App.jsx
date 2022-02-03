import React from "react";
import ShoppingPage from "../src/client/user/pages/shoppingPage";
import LoginPage from "./client/user/pages/loginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./client/admin/pages/loginPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<ShoppingPage />} />
        <Route path = "/admin/login" element = {<AdminLoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
