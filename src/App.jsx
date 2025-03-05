import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import DeleteInventory from "./components/DeleteInventory/DeleteInventory";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WarehousePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/deleteinventory" element={<DeleteInventory />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
