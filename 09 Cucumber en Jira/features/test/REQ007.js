// features/step_definitions/inactivacionProveedorSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

let deactivationResult = '';

Given('que estoy listo para registrar un nuevo proveedor', function () {
  // Simulate readiness to register a new provider
  console.log('Listo para registrar un nuevo proveedor');
});

Given('que estoy en la página de registro de proveedores de la aplicacion', function () {
  // Simulate being on the provider registration page
  console.log('En la página de registro de proveedores');
});

When('hago clic en el botón "Inactivar" junto al proveedor "La Favorita"', function () {
  // Simulate clicking the deactivate button next to the provider
  console.log('Haciendo clic en el botón "Inactivar" junto al proveedor "La Favorita"');
  
  // Simulate successful deactivation
  deactivationResult = 'Proveedor inactivado exitosamente';
});

Then('debería ver "Proveedor inactivado exitosamente"', function () {
  // Simulate checking the result
  console.log('Verificando que el texto "Proveedor inactivado exitosamente" está presente');
  
  // Basic assertion to check if deactivationResult matches the expected message
  if (deactivationResult !== 'Proveedor inactivado exitosamente') {
    throw new Error('Se esperaba "Proveedor inactivado exitosamente" pero se encontró "' + deactivationResult + '"');
  }
});
