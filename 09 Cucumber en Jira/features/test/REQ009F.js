const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let registrationResult = "";

// Simulate authentication
Given('que estoy autenticado para el fallo de REQ009', function () {
  // Code to simulate user authentication
});

// Simulate navigating to the product registration page
Given('que estoy en la página de registro de productos para el fallo de REQ009', function () {
  // Code to simulate navigating to the product registration page
});

// Simulate registering a product with a specific code
When('registro un producto con código {string} para el fallo de REQ009', function (codigoProducto) {
  // Simulate successful registration of the first product
  registrationResult = "Producto registrado exitosamente"; // Simulate the wrong outcome
});

// Simulate registering another product with the same code
When('registro otro producto con el mismo código {string} para el fallo de REQ009', function (codigoProducto) {
  // The result should still be the same as the previous registration
  registrationResult = "Producto registrado exitosamente"; // Simulate the wrong outcome
});

// Compare the result with the expected error message
Then('debería ver {string} para el fallo de REQ009', function (expectedMessage) {
  // This will fail because the actual result is different from the expected error message
  assert.strictEqual(registrationResult, expectedMessage, `Expected: ${expectedMessage}, but got: ${registrationResult}`);
});
