import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('rgms_cart')) || [];
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('rgms_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image || product.thumb, qty: 1 }];
    });
    toast.success('Added to cart successfully!', {
      description: product.name.length > 60 ? product.name.slice(0, 60) + '...' : product.name,
    });
  };

  const removeFromCart = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, count, total, open, setOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
