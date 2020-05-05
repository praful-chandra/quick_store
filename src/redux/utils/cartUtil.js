export const addToCart = (cartItems, newItem) => {
  let existingItem = cartItems.find((item) => item._id === newItem._id);

  if (existingItem) {
    return cartItems.map((item) => {
      if (item._id === newItem._id)
        return { ...item, quantity: item.quantity + 1 };

      return item;
    });
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemId) => {
  return cartItems.filter((item) => item._id !== itemId);
};

export const increaseItemCount = (cartItems, itemId) => {
  const updatedItems = cartItems.map((item) => {
    if (item._id === itemId) return { ...item, quantity: item.quantity + 1 };

    return item;
  });

  console.log(updatedItems);
  return [...updatedItems];
};

export const decreaseItemCount = (cartItems, itemId) => {
  let existingItem = cartItems.find((item) => item._id === itemId);

  if (existingItem.quantity === 1) return removeItemFromCart(cartItems, itemId);

  const updatedItems = cartItems.map((item) => {
    if (item._id === itemId) return { ...item, quantity: item.quantity - 1 };

    return item;
  });

  console.log(updatedItems);
  return [...updatedItems];
};
