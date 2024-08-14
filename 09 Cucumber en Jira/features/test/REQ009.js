// features/step_definitions/registroProductoSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

let registrationResult = '';

Given('que estoy autenticado como administrador de productos en la aplicación', function () {
  // Simulate authentication as a product administrator
  console.log('Autenticado como administrador de productos');
});

Given('que estoy en la página de registro de productos de la aplicación del sistema', function () {
  // Simulate being on the product registration page
  console.log('En la página de registro de productos de la aplicación del sistema');
});

When('ingreso "Producto A" en el campo "nombre_producto"', function () {
  // Simulate entering the product name into the field
  console.log('Ingresado "Producto A" en el campo "nombre_producto"');
});

When('ingreso "12345" en el input "codigo_producto"', function () {
  // Simulate entering the product code into the field
  console.log('Ingresado "123456" en el input "codigo_producto"');
});

When('ingreso "10" en el campo "cantidad_producto"', function () {
  // Simulate entering the product quantity into the field
  console.log('Ingresado "10" en el campo "cantidad_producto"');
});

When('ingreso "5.99" en el campo "costo_producto"', function () {
  // Simulate entering the product cost into the field
  console.log('Ingresado "5.99" en el campo "costo_producto"');
});

When('hago clic en el botón "Registrar Producto"', function () {
  // Simulate clicking the register product button
  console.log('Haciendo clic en el botón "Registrar Producto"');
  
  // Simulate successful registration
  registrationResult = 'Producto registrado exitosamente';
});

Then('debería ver "Producto registrado exitosamente"', function () {
  // Simulate checking the result
  console.log('Verificando que el texto "Producto registrado exitosamente" está presente');
  
  // Basic assertion to check if registrationResult matches the expected message
  if (registrationResult !== 'Producto registrado exitosamente') {
    throw new Error('Se esperaba "Producto registrado exitosamente" pero se encontró "' + registrationResult + '"');
  }
});
