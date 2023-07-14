import axios from 'axios';

const INVENTORY_API_BASE_URL = "http://localhost:8080/api/v1/drugs";

class InventoryService {

    getDrugInventory(){
        return axios.get(INVENTORY_API_BASE_URL);
    }

    addNewDrug(drug){
        return axios.post(INVENTORY_API_BASE_URL, drug);
    }

    getDrugByProductName(productName){
        console.log('getDrugByProductName:',productName);
        return axios.get(INVENTORY_API_BASE_URL + '/' + productName);
    }

    updateDrug(drug, productName){
        return axios.put(INVENTORY_API_BASE_URL + '/' + productName, drug);
    }

    deleteDrug(productName){
        return axios.delete(INVENTORY_API_BASE_URL + '/' + productName);
    }
}

export default new InventoryService()