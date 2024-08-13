Feature: Registro de clientes

  Scenario: Registro exitoso de un nuevo cliente
    Given que estoy autenticado en la página de registro de clientes
    When ingreso un id en el campo ci_cliente
    Then debería ver registro exitoso
