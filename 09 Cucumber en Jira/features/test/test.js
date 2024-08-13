const { Given, When, Then } = require('@cucumber/cucumber');

let registrationStatus = '';
let authenticated = false;

Given('que estoy autenticado en la página de registro de clientes', function () {
  // Simulate authentication process
  authenticated = true;
});

When('ingreso un id en el campo ci_cliente', function () {
  // Simulate entering an ID
  if (authenticated) {
    // Simulate successful registration
    registrationStatus = 'registro exitoso';
  } else {
    registrationStatus = 'error de autenticación';
  }
});

Then('debería ver registro exitoso', function () {
  // Check if the registration status is 'registro exitoso'
  if (registrationStatus !== 'registro exitoso') {
    throw new Error(`Expected 'registro exitoso' but got '${registrationStatus}'`);
  }
});
