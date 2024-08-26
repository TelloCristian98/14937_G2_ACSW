const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let searchResult = "";

// Simulate authentication
Given('que estoy autenticado para el fallo de REQ012', function () {
  // Code to simulate user authentication
});

// Simulate navigating to the products page
Given('que estoy en la página de productos para el fallo de REQ012', function () {
  // Code to simulate navigating to the products page
});

// Simulate entering an incorrect code in the search field
When('ingreso {string} en el campo de búsqueda para el fallo de REQ012', function (codigoProducto) {
  // Code to simulate entering the search code
  // Intentionally simulate the wrong result to make the test fail
  searchResult = "Producto encontrado"; // Simulate finding a product, which is incorrect
});

// Compare the result with the expected error message
Then('debería ver {string} para el fallo de REQ012', function (expectedMessage) {
  // This will fail because the actual result is different from the expected error message
  assert.strictEqual(searchResult, expectedMessage, `Expected: ${expectedMessage}, but got: ${searchResult}`);
});
