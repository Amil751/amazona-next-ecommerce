import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
export const Store = createContext();
const initialState = {
  darkMode: false,
  cart: {
    cartItems: Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [],
  },
};
function reducer(state, action) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return { ...state, darkMode: true };
    case "DARK_MODE_OFF":
      return { ...state, darkMode: false };
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const exsitItem = state.cart.cartItems.find(
        (item) => item.name === newItem.name
      );
      const cartItems = exsitItem
        ? state.cart.cartItems.map((item) => (exsitItem.name ? newItem : item))
        : [...state.cart.cartItems, newItem];
      Cookies.set("cart", JSON.stringify(cartItems));

      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
