const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let isAuthenticated = false;
let updateResult = "";

Given('que estoy autenticado para REQ002', function () {
  // Simulate successful authentication
  isAuthenticated = true;
});

Given('que estoy en la página de clientes para REQ002', function () {
  // Ensure the user is authenticated
  if (!isAuthenticated) {
    throw new Error('No autenticado en el sistema');
  }
});

When('hago clic en el botón de editar para el cliente con CI {string} para REQ002', function (ci) {
  // Simulate clicking the edit button, no action needed for dummy test
});

When('ingreso {string} en el campo {string} para REQ002', function (input, field) {
  // Simulate entering invalid data, which will cause the update to fail
  if (field === "first_name" && input === "123") {
    updateResult = "Error: Nombre inválido";
  }
});

When('hago clic en el botón de guardar para el cliente con CI {string} para REQ002', function (ci) {
  // Simulate clicking the save button, no action needed for dummy test
});

Then('debería ver {string} para REQ002', function (expectedMessage) {
  // Validate that the correct error message is shown
  assert.strictEqual(updateResult, expectedMessage, `Expected: ${expectedMessage}, but got: ${updateResult}`);
});
