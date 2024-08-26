Feature: Actualizar información de clientes para REQ002

  Scenario: Actualización fallida por datos inválidos para REQ002
    Given que estoy autenticado para REQ002
    And que estoy en la página de clientes para REQ002
    When hago clic en el botón de editar para el cliente con CI "17111457896" para REQ002
    And ingreso "123" en el campo "first_name" para REQ002
    And hago clic en el botón de guardar para el cliente con CI "17111457896" para REQ002
    Then debería ver "Error: Nombre inválido" para REQ002