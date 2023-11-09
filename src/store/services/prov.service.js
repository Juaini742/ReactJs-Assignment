import axios from "axios";

export const getProvService = async () => {
  const response = await axios.get(
    "https://api.goapi.io/regional/provinsi?api_key=303d1d2b-7cfe-5fb8-6145-8ef1486d"
  );
  return response.data;
};
