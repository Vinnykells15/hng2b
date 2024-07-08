document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Add to cart functionality
  const cartItems = [];
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    const addButton = card.querySelector("button");
    addButton.addEventListener("click", () => {
      const productName = card.querySelector("h3").textContent;
      const productPrice = card.querySelector("p:nth-child(3)").textContent;
      addToCart(productName, productPrice);
    });
  });

  function addToCart(name, price) {
    cartItems.push({ name, price });
    updateCart();
  }

  function updateCart() {
    const cartCount = document.querySelector(".cart-count");
    cartCount.textContent = cartItems.length;
  }
});

//CART
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Cart functionality
  const cartItems = [
    {
      name: "Warning branded Shirt",
      size: "M",
      quantity: 1,
      color: "Yellow",
      price: 10,
    },
    {
      name: "Flowery pattern gown",
      size: "S",
      quantity: 1,
      color: "Blue",
      price: 25,
    },
  ];

  function updateCart() {
    const cartCount = document.querySelector(".cart-count");
    cartCount.textContent = cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const cartItemElements = document.querySelectorAll(".cart-item");
    cartItemElements.forEach((itemElement, index) => {
      const quantityInput = itemElement.querySelector('input[type="number"]');
      quantityInput.value = cartItems[index].quantity;

      const itemPriceElement = itemElement.querySelector(".cart-item-price");
      itemPriceElement.textContent = `$${
        cartItems[index].price * cartItems[index].quantity
      }`;
    });

    const subtotalElement = document.querySelector(
      ".summary-item:nth-child(1) span:last-child"
    );
    const totalElement = document.querySelector(
      ".summary-item:nth-child(3) span:last-child"
    );
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    subtotalElement.textContent = `$${subtotal}`;
    totalElement.textContent = `$${subtotal}`;
  }

  document.querySelectorAll(".increase-quantity").forEach((button, index) => {
    button.addEventListener("click", () => {
      cartItems[index].quantity += 1;
      updateCart();
    });
  });

  document.querySelectorAll(".decrease-quantity").forEach((button, index) => {
    button.addEventListener("click", () => {
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
        updateCart();
      }
    });
  });

  document.querySelectorAll(".remove-item").forEach((button, index) => {
    button.addEventListener("click", () => {
      cartItems.splice(index, 1);
      button.closest(".cart-item").remove();
      updateCart();
    });
  });

  updateCart();
});
