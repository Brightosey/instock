import "./WarehousesPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import WarehousesList from "../../components/WarehousesList/WarehousesList";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function WarehousesPage() {
  const [warehousesData, setWarehousesData] = useState([]);
  const [loading, setLoading] = useState(false)

  const getWarehouses = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/warehouses`);
      setWarehousesData(response.data);
    } catch (err) {
      console.error("Error getting warehouses", err);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  if (loading) {
    return <div>Fetching data…</div>
  }

  return (
    <main className="warehouses-page">
      <WarehousesList warehousesData={warehousesData} />
    </main>
  );
}

export default WarehousesPage;
