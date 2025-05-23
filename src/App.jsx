import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import Header from "./components/Header/header";
import WarehouseAddPage from "./pages/WarehouseAddPage/WarehouseAddPage";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";
import InventoryAddPage from "./pages/InventoryAddPage/InventoryAddPage";
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetailsPage";
import EditInventoryItemPage from "./pages/EditInventoryItemPage/EditInventoryItemPage";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route
          path="/api/warehouses/:id/inventories"
          element={<WarehouseDetailsPage />}
        />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/:id" element={<InventoryItemDetailsPage />} />
        <Route path="/inventory/:id/edit" element={<EditInventoryItemPage />} />
        <Route path="/api/warehouses" element={<WarehouseAddPage />} />
        <Route path="/addinventoryitem" element={<InventoryAddPage />} />
        <Route
          path="/api/warehouses/:warehouseId/edit"
          element={<WarehouseEditPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
