import axios from "axios";

export const getProvService = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_PROV_URL}?api_key=${
      import.meta.env.VITE_APP_API_KEY_URL
    }`
  );
  return response.data;
};
