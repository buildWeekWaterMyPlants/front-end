import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: "https://watermyplantsbuildweek.herokuapp.com"
    })
}

export default axiosWithAuth;