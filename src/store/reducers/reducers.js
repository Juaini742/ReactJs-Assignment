import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productSlice from "./product.reducer";
import basketSlice from "./basketShow.reducer";
import provSlice from "./prov.reducer";
import kabSlice from "./kab.reducer";
import kecSlice from "./kec.reducer";
import kelSlice from "./kel.reducer";
import purchaseSlice from "./purchaseShow.reducer";
import qoutesSlice from "../reducers/qoutes.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productSlice,
  qoute: qoutesSlice,
  basket: basketSlice,
  prov: provSlice,
  kab: kabSlice,
  kec: kecSlice,
  kel: kelSlice,
  purchase: purchaseSlice,
});

export default rootReducer;
