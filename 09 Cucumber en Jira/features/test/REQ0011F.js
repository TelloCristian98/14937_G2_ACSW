const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let inactivationResult = "";

// Simulate authentication
Given('que estoy autenticado para el fallo de REQ011', function () {
  // Code to simulate user authentication
});

// Simulate navigating to the products page
Given('que estoy en la página de productos para el fallo de REQ011', function () {
  // Code to simulate navigating to the products page
});

// Simulate clicking the deactivate button for a specific product
When('hago clic en el botón de inactivar para el producto con código {string} para el fallo de REQ011', function (codigoProducto) {
  // Code to simulate clicking the deactivate button
  // Intentionally simulate the wrong result to make the test fail
  inactivationResult = "Producto inactivado exitosamente"; // Simulate a successful inactivation, which is incorrect
});

// Compare the result with the expected error message
Then('debería ver {string} para el fallo de REQ011', function (expectedMessage) {
  // This will fail because the actual result is different from the expected error message
  assert.strictEqual(inactivationResult, expectedMessage, `Expected: ${expectedMessage}, but got: ${inactivationResult}`);
});
