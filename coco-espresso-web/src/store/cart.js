import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,
  
  // Add item to cart or update quantity if it already exists
  addItem: (product, variation, quantity = 1) => {
    const existingItemIndex = get().items.findIndex(
      item => item.product.id === product.id && item.variation.id === variation.id
    );
    
    if (existingItemIndex >= 0) {
      // Update existing item quantity
      set(state => ({
        items: state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }));
    } else {
      // Add new item
      set(state => ({
        items: [...state.items, {
          id: `${product.id}-${variation.id}`,
          product,
          variation,
          quantity,
          price: variation.price
        }]
      }));
    }
  },
  
  // Remove item from cart
  removeItem: (itemId) => {
    set(state => ({
      items: state.items.filter(item => item.id !== itemId)
    }));
  },
  
  // Update item quantity
  updateQuantity: (itemId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(itemId);
      return;
    }
    
    set(state => ({
      items: state.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    }));
  },
  
  // Toggle cart sidebar
  toggleCart: () => set(state => ({ isOpen: !state.isOpen })),
  
  // Close cart sidebar
  closeCart: () => set({ isOpen: false }),
  
  // Open cart sidebar
  openCart: () => set({ isOpen: true }),
  
  // Get total number of items in cart
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  
  // Get cart subtotal
  getSubtotal: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  // Clear cart
  clearCart: () => set({ items: [] }),
}));