const cartModel = require("../models/cart.model");

async function getCart(req, res) {
  const userId = req.user.id;
  try {
    const cart = await cartModel
      .findOne({ userId })
      .populate("items.productId");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
}

async function addToCart(req, res) {
  const userId = req.user.id;
  const { productId, quantity } = req.body;
  try {
    let cart = await cartModel.findOne({ userId });
    if (!cart) {
      cart = new cartModel({ userId, items: [] });
    }
    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId,
    );
    if (existingItemIndex >= 0) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ message: "Failed to add to cart" });
  }
}

async function removeFromCart(req, res) {
  const userId = req.user.id;
  const { productId } = req.params;
  try {
    const cart = await cartModel
      .findOneAndUpdate(
        { userId },
        { $pull: { items: { productId } } },
        { new: true },
      )
      .populate("items.productId");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error removing from cart:", error);
    res.status(500).json({ message: "Failed to remove from cart" });
  }
}

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
};
