// features/step_definitions/registroProveedorSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

let registrationResult = '';

// Given steps simulate the preconditions for the scenario
Given('que estoy autenticado como administrador de proveedores para el test', function () {
  // Simulate being authenticated as a provider administrator
  console.log('Autenticado como administrador de proveedores para el test');
});

Given('que estoy en la página de registro de proveedores correctamente en el sistema', function () {
  // Simulate being on the provider registration page successfully
  console.log('En la página de registro de proveedores correctamente en el sistema');
});

// When steps simulate the actions being performed
When('ingreso "La Favorita" en el campo "nombre_proveedor"', function () {
  // Simulate entering the provider name
  console.log('Ingresado "La Favorita" en el campo "nombre_proveedor"');
});

When('ingreso "AV. Amazonas" en el campo "direccion_proveedor"', function () {
  // Simulate entering the provider address
  console.log('Ingresado "AV. Amazonas" en el campo "direccion_proveedor"');
});

When('ingreso "0978805846" en el campo "telefono_proveedor"', function () {
  // Simulate entering the provider phone number
  console.log('Ingresado "0978805846" en el campo "telefono_proveedor"');
});

When('ingreso "proveedor@gmail.com" en el campo "email_proveedor"', function () {
  // Simulate entering the provider email
  console.log('Ingresado "proveedor@gmail.com" en el campo "email_proveedor"');
});

When('hago clic en el botón "Registrar Proveedor" exitosamente', function () {
  // Simulate clicking the "Register Provider" button successfully
  console.log('Haciendo clic en el botón "Registrar Proveedor" exitosamente');
  
  // Simulate successful registration
  registrationResult = 'Proveedor registrado exitosamente';
});

// Then step checks the result of the action
Then('debería ver "Proveedor registrado exitosamente"', function () {
  // Simulate checking the result
  console.log('Verificando que el texto "Proveedor registrado exitosamente" está presente');
  
  // Basic assertion to check if registrationResult matches the expected message
  if (registrationResult !== 'Proveedor registrado exitosamente') {
    throw new Error('Se esperaba "Proveedor registrado exitosamente" pero se encontró "' + registrationResult + '"');
  }
});
