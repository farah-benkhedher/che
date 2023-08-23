document.addEventListener("DOMContentLoaded", function () {
    const sideCart = document.querySelector(".sidecart");
    const closeBtn = document.getElementById("close_btn");
    const itemsNum = document.getElementById("items_num");
    const cartItems = document.querySelectorAll(".cart_item");
    const subtotalPrice = document.getElementById("subtotal_price");

    // Close the side cart
    closeBtn.addEventListener("click", () => sideCart.classList.remove("open"));

    // Open the side cart
    itemsNum.addEventListener("click", () => sideCart.classList.add("open"));

    // Update the subtotal price
    function updateSubtotal() {
        let total = 0;
        cartItems.forEach(cartItem => {
            const priceText = cartItem.querySelector(".item_details strong").textContent;
            const price = parseFloat(priceText.replace("K$", ""));
            const quantity = parseInt(cartItem.querySelector(".quantity strong").textContent);
            total += price * quantity;
        });
        subtotalPrice.textContent =total.toFixed(2); // Display two decimal places
    }

    // Attach event listeners to quantity buttons
    cartItems.forEach(cartItem => {
        const quantityDisplay = cartItem.querySelector(".quantity strong");
        const decreaseBtn = cartItem.querySelector(".quantity span:first-child");
        const increaseBtn = cartItem.querySelector(".quantity span:last-child");

        decreaseBtn.addEventListener("click", () => {
            const currentQuantity = parseInt(quantityDisplay.textContent);
            if (currentQuantity > 1) {
                quantityDisplay.textContent = currentQuantity - 1;
                updateSubtotal();
            }
        });

        increaseBtn.addEventListener("click", () => {
            const currentQuantity = parseInt(quantityDisplay.textContent);
            quantityDisplay.textContent = currentQuantity + 1;
            updateSubtotal();
        });
    });

    // Initial call to update the subtotal
    updateSubtotal();
});
