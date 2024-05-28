import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const updateSubscription = async (subscriptionId, subscription) => {
    const endpoint = axios.defaults.baseURL + "subscription/" + subscriptionId
    console.log(endpoint)
        try {
            await axiosInstance.put(endpoint, subscription);
        } catch (error) {
            console.log(error);
        }
};

export default updateSubscription;