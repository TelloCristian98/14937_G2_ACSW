// features/step_definitions/clientSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

let pageContent = '';

Given('que estoy autenticado en el sistema', function () {
  // Simulate authentication
  console.log('Usuario autenticado');
});

Given('que estoy en la página de clientes', function () {
  // Simulate being on the clients page
  console.log('En la página de clientes');
});

When('ingreso "0000000000" en el campo "campo"', function () {
  // Simulate entering a specific CI into the field
  console.log('Ingresado 0000000000 en el campo campo');
});

When('hago clic en el botón "Buscar"', function () {
  // Simulate clicking the search button
  console.log('Haciendo clic en el botón Buscar');
  
  // Set pageContent to a different value to ensure the test fails
  pageContent = 'Texto incorrecto para asegurar que la prueba falle';
});

Then('debería ver "No se encontraron resultados para el cliente con CI 0000000000"', function () {
  // Simulate checking the result
  console.log('Verificando que el texto "No se encontraron resultados para el cliente con CI 0000000000" está presente');
  
  // This condition will fail because pageContent does not match the expected text
  if (pageContent !== 'No se encontraron resultados para el cliente con CI 0000000000') {
    throw new Error('Se esperaba "No se encontraron resultados para el cliente con CI 0000000000" pero se encontró "' + pageContent + '"');
  }
});
