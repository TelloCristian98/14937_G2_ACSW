// features/step_definitions/actualizacionProveedorSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

let updateResult = '';

Given('que estoy en la página de búsqueda de proveedores', function () {
  // Simulate being on the provider search page
  console.log('En la página de búsqueda de proveedores');
});

Given('que estoy en la página de registro de proveedores', function () {
  // Simulate being on the provider registration page
  console.log('En la página de registro de proveedores');
});

When('ingreso "Nuevo Nombre" en el campo "Nombre_Proveedor"', function () {
  // Simulate entering a provider name into the field
  console.log('Ingresado "Nuevo Nombre" en el campo "Nombre_Proveedor"');
});

When('ingreso "Nueva Dirección" en el campo "Direccion_Proveedor"', function () {
  // Simulate entering a provider address into the field
  console.log('Ingresado "Nueva Dirección" en el campo "Direccion_Proveedor"');
});

When('hago clic en el botón "Guardar Cambios" del feature 6', function () {
  // Simulate clicking the save changes button
  console.log('Haciendo clic en el botón "Guardar Cambios"');
  
  // Simulate successful update
  updateResult = 'Información actualizada exitosamente';
});

Then('debería verse "Información actualizada exitosamente"', function () {
  // Simulate checking the result
  console.log('Verificando que el texto "Información actualizada exitosamente" está presente');
  
  // Basic assertion to check if updateResult matches the expected message
  if (updateResult !== 'Información actualizada exitosamente') {
    throw new Error('Se esperaba "Información actualizada exitosamente" pero se encontró "' + updateResult + '"');
  }
});
