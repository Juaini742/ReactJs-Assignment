import axios from "axios";

const getUsers = async () => {
  const response = await axios.get(`${import.meta.env.VITE_APP_USERS_URL}`);
  return response.data;
};

export default getUsers;
