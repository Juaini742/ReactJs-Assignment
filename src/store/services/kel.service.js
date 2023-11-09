import axios from "axios";

export const getKelService = async (id) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_KEL_URL}?kecamatan_id=${id}&api_key=${
      import.meta.env.VITE_APP_API_KEY_URL
    }`
  );
  return response.data;
};
