const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let isAuthenticated = false;
let inactivationResult = "";

Given('que estoy autenticado para el fallo de REQ003', function () {
  // Simulate successful authentication
  isAuthenticated = true;
});

Given('que estoy en la página de clientes para el fallo de REQ003', function () {
  // Ensure the user is authenticated
  if (!isAuthenticated) {
    throw new Error('No autenticado en el sistema');
  }
});

When('hago clic en el botón de inactivar para el cliente con CI {string} para el fallo de REQ003', function (ci) {
  // Intentionally set a successful message instead of the expected error
  inactivationResult = "Cliente inactivado con éxito"; // Simulating a wrong outcome
});

Then('debería ver {string} en el fallo de REQ003', function (expectedMessage) {
  // This assertion will fail because the result is deliberately incorrect
  assert.strictEqual(inactivationResult, expectedMessage, `Expected: ${expectedMessage}, but got: ${inactivationResult}`);
});
