const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let isAuthenticated = false;
let searchResult = "";

Given('que estoy autenticado para el fallo de REQ004', function () {
  // Simulate successful authentication
  isAuthenticated = true;
});

Given('que estoy en la página de clientes para el fallo de REQ004', function () {
  // Ensure the user is authenticated and on the clients page
  if (!isAuthenticated) {
    throw new Error('No autenticado en el sistema');
  }
});

When('ingreso {string} en el campo de búsqueda para el fallo de REQ004', function (ci) {
  // Simulate a successful search result instead of an error
  searchResult = "Cliente encontrado"; // This should cause the test to fail
});

Then('debería ver {string} para el fallo de REQ004', function (expectedMessage) {
  // Validate the incorrect search result, which will not match the expected error message
  assert.strictEqual(searchResult, expectedMessage, `Expected: ${expectedMessage}, but got: ${searchResult}`);
});
