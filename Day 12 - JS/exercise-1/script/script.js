document.addEventListener('DOMContentLoaded', function () {
    // Fill in your code here
    const totalValue = document.querySelector("#ItemsTotal");

    function CalculateItemsValue() {
        // Fill in your code here
        let newTotal = 0;

        // Calculate new total value
        for (let i=1; i < 5; i++) {
            let inputId = `qnt_${i}`;
            let itemField = document.querySelector(`#${inputId}`);
            let itemValue = itemField.value * itemField.getAttribute("data-price");
            newTotal += itemValue;
        }

        // Display new total value
        totalValue.textContent = newTotal;
    }

    // Add event listener for each input field
    document.querySelectorAll('.quantityInput').forEach(function (input) {
        input.addEventListener('keyup', CalculateItemsValue);
    });
});