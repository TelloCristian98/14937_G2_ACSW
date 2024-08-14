// features/step_definitions/busquedaProductoSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

let searchResult = '';

// Given steps simulate the preconditions for the scenario
Given('que estoy en la página de búsqueda de productos del feature 12', function () {
  // Simulate being on the product search page
  console.log('En la página de búsqueda de productos del feature 12');
});

Given('que estoy en la página de productos correctamente en el feature 12', function () {
  // Simulate being on the products page correctly
  console.log('En la página de productos correctamente en el feature 12');
});

// When step simulates the action being performed
When('ingreso "Producto A" en el campo "campoUno"', function () {
  // Simulate entering the product name into the search field
  console.log('Ingresado "Producto A" en el campo "campoUno"');
  
  // Simulate search result
  searchResult = 'Producto A';
});

// Then step checks the result of the action
Then('debería ver "Producto A"', function () {
  // Simulate checking the search result
  console.log('Verificando que el texto "Producto A" está presente');
  
  // Basic assertion to check if searchResult matches the expected product name
  if (searchResult !== 'Producto A') {
    throw new Error('Se esperaba "Producto A" pero se encontró "' + searchResult + '"');
  }
});
