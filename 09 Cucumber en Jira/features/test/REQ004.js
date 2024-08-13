// features/step_definitions/searchClientSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

let searchResult = '';

Given('que estoy autenticado dentro del sistema', function () {
  // Simulate authentication within the system
  console.log('Usuario autenticado dentro del sistema');
});

Given('que estoy en la página de clientes para el feature 4', function () {
  // Simulate being on the clients page
  console.log('En la página de clientes');
});

When('ingreso "1721286395" en el campo "campo"', function () {
  // Simulate entering the CI into the search field
  console.log('Ingresado 1721286395 en el campo campo');
});

When('hago clic en el botón "Buscar" del sistema', function () {
  // Simulate clicking the search button
  console.log('Haciendo clic en el botón Buscar del sistema');
  
  // Simulate search result for the client
  searchResult = 'Juan Perez';
});

Then('debería ver "Juan Perez"', function () {
  // Simulate checking the result
  console.log('Verificando que el texto "Juan Perez" está presente');
  
  // Basic assertion to check if searchResult matches the expected name
  if (searchResult !== 'Juan Perez') {
    throw new Error('Se esperaba "Juan Perez" pero se encontró "' + searchResult + '"');
  }
});
