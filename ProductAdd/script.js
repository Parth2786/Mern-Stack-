const form = document.getElementById("form");
const tableBody = document.querySelector("#table tbody");

let count = 1;

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh

    // Get values from the form
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quanity.value;

    // Create a new table row
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${count++}</td>
        <td>${name}</td>
        <td>${category}</td>
        <td>₹${price}</td>
        <td>${quantity}</td>
    `;

    // Add row to the table
    tableBody.appendChild(row);

    // Clear the form
    form.reset();

    // Focus back to the first input
    form.name.focus();
});