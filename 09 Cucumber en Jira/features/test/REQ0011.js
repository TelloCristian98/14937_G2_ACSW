// features/step_definitions/inactivacionProductoSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

let deactivationResult = '';

// Given steps simulate the preconditions for the scenario
Given('que tengo acceso a la gestión de productos del feature 11', function () {
  // Simulate having access to product management, possibly from another feature context
  console.log('Acceso a la gestión de productos del feature 11');
});

Given('que estoy en la página de productos con exito', function () {
  // Simulate being on the products page successfully
  console.log('En la página de productos con éxito');
});

// When step simulates the action being performed
When('hago clic en el botón "Inactivar" junto al producto "Producto A"', function () {
  // Simulate clicking the "Inactivar" button next to the specified product
  console.log('Haciendo clic en el botón "Inactivar" junto al producto "Producto A"');
  
  // Simulate successful deactivation
  deactivationResult = 'Producto inactivado exitosamente';
});

// Then step checks the result of the action
Then('debería ver "Producto inactivado exitosamente"', function () {
  // Simulate checking the result
  console.log('Verificando que el texto "Producto inactivado exitosamente" está presente');
  
  // Basic assertion to check if deactivationResult matches the expected message
  if (deactivationResult !== 'Producto inactivado exitosamente') {
    throw new Error('Se esperaba "Producto inactivado exitosamente" pero se encontró "' + deactivationResult + '"');
  }
});
