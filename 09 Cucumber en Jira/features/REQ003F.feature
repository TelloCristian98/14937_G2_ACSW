Feature: Inactivar un cliente para el fallo de REQ003

  Scenario: Fallo al intentar inactivar un cliente inexistente para el fallo de REQ003
    Given que estoy autenticado para el fallo de REQ003
    And que estoy en la página de clientes para el fallo de REQ003
    When hago clic en el botón de inactivar para el cliente con CI "9999999999" para el fallo de REQ003
    Then debería ver "Error: El cliente no existe" en el fallo de REQ003