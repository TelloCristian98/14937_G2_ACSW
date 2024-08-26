const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let inactivateResult = "";

Given('que estoy autenticado para el fallo de REQ007', function () {
  // Simulate authentication
});

Given('que estoy en la página de proveedores para el fallo de REQ007', function () {
  // Simulate navigating to the providers page
});

When('hago clic en el botón de inactivar para el proveedor con nombre {string} para el fallo de REQ007', function (nombreProveedor) {
  // Simulate the action of attempting to inactivate a provider
  // Intentionally simulate the wrong result to make the test fail
  inactivateResult = "Proveedor inactivado exitosamente"; // This is incorrect for the test case
});

Then('debería ver {string} para el fallo de REQ007', function (expectedMessage) {
  // Compare the incorrect simulated result with the expected error message
  assert.strictEqual(inactivateResult, expectedMessage, `Expected: ${expectedMessage}, but got: ${inactivateResult}`);
});
