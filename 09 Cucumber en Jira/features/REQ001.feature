Feature: Registro de clientes

  Scenario: Registro exitoso de un nuevo cliente
    Given que estoy autenticado
    And que estoy en la página de registro de clientes
    When ingreso "1724569874" en el campo "ci_cliente"
    And ingreso "Juan" en el campo "nombre_cliente"
    And ingreso "Perez" en el campo "apellido_cliente"
    And ingreso "0978805846" en el campo "telefono_cliente"
    And ingreso "25 de noviembre y maldonado" en el campo "direccion_cliente"
    And hago clic en el botón "Registrar Cliente"
    Then debería ver "Registro exitoso"