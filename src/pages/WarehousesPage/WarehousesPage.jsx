import "./WarehousesPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Icons/MainScene.json";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function WarehousesPage() {
  const [warehousesData, setWarehousesData] = useState([]);
  const [loading, setLoading] = useState(true)

  const getWarehouses = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/warehouses`);
      setWarehousesData(response.data);
    } catch (err) {
      console.error("Error getting warehouses", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Lottie animationData={loadingAnimation} loop={true} style={{ width: 200 }} />
        <p className="mt-4 text-lg font-medium text-gray-600">Fetching data...</p>
      </div>
    );
  }

  return (
    <main className="warehouses-page">
      <WarehousesList warehousesData={warehousesData} />
    </main>
  );
}

export default WarehousesPage;
