const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let updateResult = "";

Given('que estoy en la página de búsqueda de proveedores para el fallo de REQ006', function () {
  // Simulate navigating to the provider search page
});

Given('que estoy en la página de registro de proveedores para el fallo de REQ006', function () {
  // Simulate navigating to the provider registration page
});

When('ingreso {string} en el campo "Nombre_Proveedor" para el fallo de REQ006', function (nombreProveedor) {
  // Simulate entering the new provider name
});

When('ingreso {string} en el campo "Direccion_Proveedor" para el fallo de REQ006', function (direccionProveedor) {
  // Simulate entering the new provider address
});

When('hago clic en el botón "Guardar Cambios" para el fallo de REQ006', function () {
  // Intentionally set an incorrect message to cause the test to fail
  updateResult = "Error al actualizar la información del proveedor"; // Simulating a wrong outcome
});

Then('debería ver {string} para el fallo de REQ006', function (expectedMessage) {
  // Validate the incorrect update result, which will not match the expected success message
  assert.strictEqual(updateResult, expectedMessage, `Expected: ${expectedMessage}, but got: ${updateResult}`);
});
