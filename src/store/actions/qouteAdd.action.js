import { createAsyncThunk } from "@reduxjs/toolkit";
import { postQouteService } from "../services/qouteAdd.service";
import swal from "sweetalert";

export const postQouteAction = createAsyncThunk(
  "qoute/saveQoute",
  async (qouteData) => {
    try {
      const response = await postQouteService(qouteData);
      swal({
        title: "Success",
        text: "Success adding your quote",
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
      return response;
    } catch (error) {
      swal({
        title: "Failure",
        text: "Failed to add your quote",
        icon: "error",
      });
      throw new Error(error.message);
    }
  }
);
