const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let updateResult = "";

// Simulate authentication
Given('que estoy autenticado para el fallo de REQ010', function () {
  // Code to simulate user authentication
});

// Simulate navigating to the products page
Given('que estoy en la página de productos para el fallo de REQ010', function () {
  // Code to simulate navigating to the products page
});

// Simulate clicking the edit button for a specific product
When('hago clic en el botón de editar para el producto con código {string} para el fallo de REQ010', function (codigoProducto) {
  // Code to simulate clicking the edit button for the product
  // Simulate setting up for the update operation
});

// Simulate entering a negative price in the cost field
When('ingreso {string} en el campo {string} para el fallo de REQ010', function (precio, campo) {
  // Simulate entering a negative price
  // Intentionally simulate the wrong result to make the test fail
  updateResult = "Información actualizada exitosamente"; // Simulate a successful update, which is incorrect
});

// Simulate clicking the save button
When('hago clic en el botón de guardar para el producto con código {string} para el fallo de REQ010', function (codigoProducto) {
  // The result should still be the same as the previous operation
  // Intentionally simulate a success result to make the test fail
  updateResult = "Información actualizada exitosamente"; // Simulate a successful update
});

// Compare the result with the expected error message
Then('debería ver {string} para el fallo de REQ010', function (expectedMessage) {
  // This will fail because the actual result is different from the expected error message
  assert.strictEqual(updateResult, expectedMessage, `Expected: ${expectedMessage}, but got: ${updateResult}`);
});
