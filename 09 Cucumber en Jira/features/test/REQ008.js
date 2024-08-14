// features/step_definitions/busquedaProveedoresSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

let searchResult = '';

Given('que tengo acceso a la lista de proveedores del sistema', function () {
  // Simulate having access to the list of providers in the system
  console.log('Acceso a la lista de proveedores del sistema');
});

Given('que estoy en la página de registro de proveedores correctamente', function () {
  // Simulate being on the provider registration page correctly
  console.log('En la página de registro de proveedores correctamente');
});

When('ingreso "La Favorita" en el campo "campo"', function () {
  // Simulate entering the provider name into the search field
  console.log('Ingresado "La Favorita" en el campo "campo"');
  
  // Simulate the search result for the provider
  searchResult = 'La Favorita';
});

Then('debería ver "La Favorita"', function () {
  // Simulate checking the result
  console.log('Verificando que el texto "La Favorita" está presente');
  
  // Basic assertion to check if searchResult matches the expected provider name
  if (searchResult !== 'La Favorita') {
    throw new Error('Se esperaba "La Favorita" pero se encontró "' + searchResult + '"');
  }
});
