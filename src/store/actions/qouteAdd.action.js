import swal from "sweetalert";
import { postQouteService } from "../services/qouteAdd.service";

export const postQouteAction = (qouteData, callback) => {
  return async (dispatch) => {
    try {
      const response = await postQouteService(qouteData);
      dispatch({ type: "SAVE_QOUTE_SUCCESS", payload: response });
      swal({
        title: "Success",
        text: "Success adding your quote",
        icon: "success",
      }).then(() => {
        if (callback && typeof callback === "function") {
          callback();
        }
      });
    } catch (error) {
      dispatch({ type: "SAVE_QOUTE_FAILURE", payload: error.message });
      swal({
        title: "Failure",
        text: "Failed to add your quote",
        icon: "error",
      });
    }
  };
};
