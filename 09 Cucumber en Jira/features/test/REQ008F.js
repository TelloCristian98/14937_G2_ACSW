const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let searchResult = "";

Given('que estoy autenticado para el fallo de REQ008', function () {
  // Simulate authentication
});

Given('que estoy en la página de proveedores para el fallo de REQ008', function () {
  // Simulate navigating to the providers page
});

When('ingreso {string} en el campo de búsqueda para el fallo de REQ008', function (nombreProveedor) {
  // Simulate searching for a provider
  // Intentionally simulate the wrong result to make the test fail
  searchResult = "Proveedor encontrado exitosamente"; // This is incorrect for the test case
});

Then('debería ver {string} para el fallo de REQ008', function (expectedMessage) {
  // Compare the incorrect simulated result with the expected error message
  assert.strictEqual(searchResult, expectedMessage, `Expected: ${expectedMessage}, but got: ${searchResult}`);
});
