import swal from "sweetalert";
import { postPurchaseService } from "../services/purchase.service";

export const savePurchase = (purchaseData) => {
  return async (dispatch) => {
    try {
      const response = await postPurchaseService(purchaseData);
      dispatch({ type: "SAVE_PURCHASE_SUCCESS", payload: response });
      swal({
        title: "Thank you",
        text: "Your data is still available, if you want to delete it, you can delete it manually",
        icon: "success",
      }).then(() => {
        window.location.href = "/purchase";
      });
    } catch (err) {
      dispatch({ type: "SAVE_PURCHASE_FAILURE", payload: err.message });
      swal({
        title: "Failure",
        text: "Failed to make a purchase",
        icon: "error",
      });
    }
  };
};
