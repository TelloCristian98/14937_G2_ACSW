const { Given, When, Then } = require('@cucumber/cucumber');

let registrationData = {};
let registrationStatus = '';

Given('que estoy autenticado', function () {
  // Simulate authentication
  this.authenticated = true;
});

Given('que estoy en la página de registro de clientes', function () {
  // Simulate that the user is on the registration page
  if (!this.authenticated) {
    throw new Error('Usuario no autenticado');
  }
  this.page = 'registro_clientes';
});

When('ingreso "1724569874" en el campo "ci_cliente"', function () {
  registrationData['ci_cliente'] = "1724569874";
});

When('ingreso "Juan" en el campo "nombre_cliente"', function () {
  registrationData['nombre_cliente'] = "Juan";
});

When('ingreso "Perez" en el campo "apellido_cliente"', function () {
  registrationData['apellido_cliente'] = "Perez";
});

When('ingreso "0978805846" en el campo "telefono_cliente"', function () {
  registrationData['telefono_cliente'] = "0978805846";
});

When('ingreso "25 de noviembre y maldonado" en el campo "direccion_cliente"', function () {
  registrationData['direccion_cliente'] = "25 de noviembre y maldonado";
});

When('hago clic en el botón "Registrar Cliente"', function () {
  // Simulate form submission
  if (!this.authenticated || this.page !== 'registro_clientes') {
    throw new Error('No autenticado o no en la página correcta');
  }

  // Dummy validation for successful registration
  if (
    registrationData['ci_cliente'] &&
    registrationData['nombre_cliente'] &&
    registrationData['apellido_cliente'] &&
    registrationData['telefono_cliente'] &&
    registrationData['direccion_cliente']
  ) {
    registrationStatus = 'Registro exitoso';
  } else {
    registrationStatus = 'Error de registro';
  }
});

Then('debería ver "Registro exitoso"', function () {
  // Verify if the registrationStatus matches the expected status
  if (registrationStatus !== 'Registro exitoso') {
    throw new Error(`Expected 'Registro exitoso' but got '${registrationStatus}'`);
  }
});


