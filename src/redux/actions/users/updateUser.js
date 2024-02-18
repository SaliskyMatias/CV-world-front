import axiosInstance from "../../../config/axios-config";

const updateStatus = {
    status: null,
    message: null
};

const updateUser = async (user) => {
    const endpoint = "http://localhost:3001/user/";

        try {
            await axiosInstance.put(endpoint, user)
            
            updateStatus.status = "Success";
            updateStatus.message = "¡Tu usuario se actualizó con éxito!";
        } catch (error) {
            console.log(error);

            const errorStatus = error.response.status;

            if (errorStatus === 409) {
                updateStatus.status = "Fail";
                updateStatus.message = "Ya existe un usuario con ese email"
            } else {
                updateStatus.status = "Fail";
                updateStatus.message = "Error del servidor"
            };
        }

    return updateStatus;
};

export default updateUser;