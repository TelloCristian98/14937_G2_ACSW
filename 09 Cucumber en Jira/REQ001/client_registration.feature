Feature: Registro de clientes

  Scenario: Registro exitoso de un nuevo cliente
    Given que estoy autenticado
    And que estoy en la página de registro de clientes
    When ingreso "1724569874" en el campo "ci_cliente"
    Then debería ver "Registro exitoso"

