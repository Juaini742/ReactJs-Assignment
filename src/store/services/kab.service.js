import axios from "axios";

export const getKabService = async (id) => {
  const response = await axios.get(
    `https://api.goapi.io/regional/kota?provinsi_id=${id}&api_key=303d1d2b-7cfe-5fb8-6145-8ef1486d`
  );
  return response.data;
};
