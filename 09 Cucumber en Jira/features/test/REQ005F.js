const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let isAuthenticated = false;
let registrationResult = "";

Given('que estoy autenticado como administrador de proveedores para el fallo de REQ005', function () {
  // Simulate successful authentication as a provider administrator
  isAuthenticated = true;
});

Given('que estoy en la página de registro de proveedores para el fallo de REQ005', function () {
  // Ensure the user is authenticated and on the provider registration page
  if (!isAuthenticated) {
    throw new Error('No autenticado en el sistema');
  }
});

When('ingreso {string} en el campo "nombre_proveedor" para el fallo de REQ005', function (nombreProveedor) {
  // Simulate entering the provider name
});

When('ingreso {string} en el campo "direccion_proveedor" para el fallo de REQ005', function (direccionProveedor) {
  // Simulate entering the provider address
});

When('ingreso {string} en el campo "telefono_proveedor" para el fallo de REQ005', function (telefonoProveedor) {
  // Simulate entering the provider phone number
});

When('ingreso {string} en el campo "email_proveedor" para el fallo de REQ005', function (emailProveedor) {
  // Simulate entering the provider email
});

When('hago clic en el botón "Registrar Proveedor" para el fallo de REQ005', function () {
  // Intentionally set an incorrect message to cause the test to fail
  registrationResult = "Error al registrar proveedor"; // Simulating a wrong outcome
});

Then('debería ver {string} para el fallo de REQ005', function (expectedMessage) {
  // Validate the incorrect registration result, which will not match the expected success message
  assert.strictEqual(registrationResult, expectedMessage, `Expected: ${expectedMessage}, but got: ${registrationResult}`);
});
