Feature: Registro de clientes fallido

  Scenario: Registro fallido de un nuevo cliente
    Given que estoy autenticado en la pagina para la prueba de fallo 01
    And que estoy en la página de registro de clientes para la prueba de fallo 01
    When ingreso "17245" en el campo "ci_cliente" para la prueba de fallo 01
    And ingreso "Juan" en el campo "nombre_cliente" para la prueba de fallo 01
    And ingreso "Perez" en el campo "apellido_cliente" para la prueba de fallo 01
    And ingreso "78805846" en el campo "telefono_cliente" para la prueba de fallo 01
    And ingreso "25 de noviembre y maldonado" en el campo "direccion_cliente" para la prueba de fallo 01
    And hago clic en el botón "Registrar Cliente" para la prueba de fallo 01
    Then debería ver "Registro exitoso" en la prueba de fallo 01