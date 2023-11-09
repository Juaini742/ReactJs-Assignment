import swal from "sweetalert";
import { saveBasketToAPI } from "../services/basket.service";

export const saveBasket = (basketData) => {
  return async (dispatch) => {
    try {
      const response = await saveBasketToAPI(basketData);
      dispatch({ type: "SAVE_BASKET_SUCCESS", payload: response });
      swal({
        title: "Good job!",
        text: "your data has been saved to your basket",
        icon: "success",
      });
    } catch (error) {
      dispatch({ type: "SAVE_BASKET_FAILURE", payload: error.message });
      swal({
        title: "Error!",
        text: "Failed to save your data to your basket",
        icon: "error",
      });
    }
  };
};
