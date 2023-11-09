import axios from "axios";

export const postQouteService = async (qouteData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_QOUTES_URL}`,
    qouteData
  );
  return response.data;
};
