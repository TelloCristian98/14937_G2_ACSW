const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let isAuthenticated = false;
let registrationResult = "";

Given('que estoy autenticado en la pagina para la prueba de fallo 01', function () {
  isAuthenticated = true; // Simulate successful authentication
});

Given('que estoy en la página de registro de clientes para la prueba de fallo 01', function () {
  if (!isAuthenticated) {
    throw new Error('No autenticado en el sistema');
  }
});

When('ingreso {string} en el campo {string} para la prueba de fallo 01', function (input, field) {
  // Simulate entering data, no actual logic needed
});

When('hago clic en el botón {string} para la prueba de fallo 01', function (button) {
  // Intentionally set the wrong result
  registrationResult = "Registro fallido"; // Simulating a failure
});

Then('debería ver {string} en la prueba de fallo 01', function (expectedMessage) {
  // This assertion will fail because the result is deliberately incorrect
  assert.strictEqual(registrationResult, expectedMessage, `Expected: ${expectedMessage}, but got: ${registrationResult}`);
});
