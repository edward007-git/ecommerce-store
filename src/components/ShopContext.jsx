import React, { createContext, useState, useCallback } from "react";
import { products } from "../assets/products.js";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 0;

  // ─── Cart State ────────────────────────────────────────────────
  // cartItems: { [productId]: { [size]: quantity } }
  const [cartItems, setCartItems] = useState({});

  // ─── Toast State ───────────────────────────────────────────────
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // ─── Cart Actions ──────────────────────────────────────────────
  const addToCart = useCallback((itemId, size) => {
    if (!size) {
      showToast("Please select a size.", "error");
      return;
    }
    setCartItems((prev) => {
      const updated = { ...prev };
      if (!updated[itemId]) updated[itemId] = {};
      updated[itemId] = {
        ...updated[itemId],
        [size]: (updated[itemId][size] || 0) + 1,
      };
      return updated;
    });
    showToast("Added to bag.", "success");
  }, [showToast]);

  const removeFromCart = useCallback((itemId, size) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] && updated[itemId][size]) {
        const newQty = updated[itemId][size] - 1;
        if (newQty <= 0) {
          const { [size]: _, ...rest } = updated[itemId];
          if (Object.keys(rest).length === 0) {
            const { [itemId]: __, ...remaining } = updated;
            return remaining;
          }
          updated[itemId] = rest;
        } else {
          updated[itemId] = { ...updated[itemId], [size]: newQty };
        }
      }
      return updated;
    });
  }, []);

  const updateCartQty = useCallback((itemId, size, qty) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (qty <= 0) {
        if (updated[itemId]) {
          const { [size]: _, ...rest } = updated[itemId];
          if (Object.keys(rest).length === 0) {
            const { [itemId]: __, ...remaining } = updated;
            return remaining;
          }
          updated[itemId] = rest;
        }
      } else {
        if (!updated[itemId]) updated[itemId] = {};
        updated[itemId] = { ...updated[itemId], [size]: qty };
      }
      return updated;
    });
  }, []);

  const getCartCount = useCallback(() => {
    return Object.values(cartItems).reduce((total, sizes) => {
      return total + Object.values(sizes).reduce((s, qty) => s + qty, 0);
    }, 0);
  }, [cartItems]);

  const getCartTotal = useCallback(() => {
    return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
      const product = products.find((p) => p._id === itemId);
      if (!product) return total;
      return (
        total +
        Object.values(sizes).reduce((s, qty) => s + qty * product.price, 0)
      );
    }, 0);
  }, [cartItems, products]);

  const getCartLines = useCallback(() => {
    const lines = [];
    Object.entries(cartItems).forEach(([itemId, sizes]) => {
      const product = products.find((p) => p._id === itemId);
      if (!product) return;
      Object.entries(sizes).forEach(([size, qty]) => {
        if (qty > 0) lines.push({ product, size, qty });
      });
    });
    return lines;
  }, [cartItems, products]);

  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartQty,
    getCartCount,
    getCartTotal,
    getCartLines,
    toasts,
    showToast,
    dismissToast,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
