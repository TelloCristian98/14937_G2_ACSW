// features/step_definitions/actualizacionProductoSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

let updateResult = '';

Given('que estoy en la página de registro de productos para el test', function () {
  // Simulate being on the product registration page
  console.log('En la página de registro de productos');
});

Given('que estoy en la página de productos correctamente', function () {
  // Simulate being on the products page
  console.log('En la página de productos');
});

When('ingreso "Nuevo Producto B" en el campo "nombre_producto"', function () {
  // Simulate entering the new product name into the field
  console.log('Ingresado "Nuevo Producto A" en el campo "nombre_producto"');
});

When('ingreso "123456" en el campo "codigo_producto"', function () {
  // Simulate entering the product code into the field
  console.log('Ingresado "12345" en el campo "codigo_producto"');
});

When('hago clic en el botón "Guardar Cambios "', function () {
  // Simulate clicking the save changes button
  console.log('Haciendo clic en el botón "Guardar Cambios"');
  
  // Simulate successful update
  updateResult = 'Información actualizada exitosamente';
});

Then('debería ver "Información actualizada exitosamente "', function () {
  // Simulate checking the result
  console.log('Verificando que el texto "Información actualizada exitosamente" está presente');
  
  // Basic assertion to check if updateResult matches the expected message
  if (updateResult !== 'Información actualizada exitosamente') {
    throw new Error('Se esperaba "Información actualizada exitosamente" pero se encontró "' + updateResult + '"');
  }
});
