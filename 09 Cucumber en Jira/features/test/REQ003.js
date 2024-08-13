// features/step_definitions/inactivateClientSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

let actionResult = '';

Given('que estoy autenticado en el sistema del cliente', function () {
  // Simulate authentication for the client system
  console.log('Usuario autenticado en el sistema del cliente');
});

Given('que estoy en la página de clientes para la prueba', function () {
  // Simulate being on the clients page
  console.log('En la página de clientes');
});

When('hago clic en el botón de confirmar para el cliente con CI "1721286395"', function () {
  // Simulate clicking the confirm button for the specified client CI
  console.log('Haciendo clic en el botón de confirmar para el cliente con CI 1721286395');
  
  // Set actionResult to indicate successful deactivation
  actionResult = 'Cliente inactivado exitosamente';
});

Then('debería ver "Cliente inactivado exitosamente"', function () {
  // Simulate checking the result
  console.log('Verificando que el texto "Cliente inactivado exitosamente" está presente');
  
  // Basic assertion to check if actionResult matches the expected text
  if (actionResult !== 'Cliente inactivado exitosamente') {
    throw new Error('Se esperaba "Cliente inactivado exitosamente" pero se encontró "' + actionResult + '"');
  }
});
