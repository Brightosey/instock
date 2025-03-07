import React from "react";
import { useParams } from "react-router-dom";
import WarehouseModify from "../../components/WarehouseModify/WarehouseModify";
import "./WarehouseEditPage.scss";

const { VITE_SERVER_URL, VITE_PORT } = import.meta.env;

const WarehouseEditPage = () => {
	const { warehouseId } = useParams();
	const pathToWarehouseInventoriesPage = `/api/warehouses/${warehouseId}}/inventories`;
	const requestUrl = `${VITE_SERVER_URL}:${VITE_PORT}/api/warehouses/${warehouseId}}/edit`;
	const warehouseByIdUrl = `${VITE_SERVER_URL}:${VITE_PORT}/api/warehouses/${warehouseId}`;
	return (
		<main>
			<WarehouseModify
				pageTitle="Edit Warehouse"
				exitPath={pathToWarehouseInventoriesPage}
				formSubmitBtnText="Save"
				requestType="put"
				requestUrl={requestUrl}
				warehouseByIdUrl={warehouseByIdUrl}
			/>
		</main>
	);
};

export default WarehouseEditPage;
