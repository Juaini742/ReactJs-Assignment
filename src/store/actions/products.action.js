// import swal from "sweetalert";
import { getProducts } from "../services/products.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDataProductsAction = createAsyncThunk(
  "products/getDataProducts",
  async () => {
    try {
      const products = await getProducts();

      return products;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);
