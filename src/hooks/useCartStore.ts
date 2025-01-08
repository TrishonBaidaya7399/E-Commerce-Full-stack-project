import { wixClient } from "@/context/WixContext";
import { currentCart } from "@wix/ecom";
import { create } from "zustand";

type CartState = {
  cart: currentCart.Cart;
  isLoading: boolean;
  error: string | null;
  counter: number | null;
  getCart: (wixClient: wixClient) => void;
  addItem: (
    wixClient: wixClient,
    productId: string,
    variantId: string,
    quantity: number
  ) => void;
  removeItem: (wixClient: wixClient, itemId: string) => void;
};
const useCartStore = create<CartState>((set) => ({
  cart: [],
  isLoading: true,
  error: "",
  counter: 0,
  getCart: async (wixClient) => {
    const cart = await wixClient.currentCart.getCurrentCart();
    set({
      cart: cart || [],
      isLoading: false,
      counter: cart?.lineItems?.length || 0,
    });
  },
  addItem: async (wixClient) => {},
  removeItem: async (wixClient) => {},
}));
export default useCartStore;
