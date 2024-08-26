Feature: Buscar información de clientes

  Scenario: Fallo al buscar un cliente con CI incorrecto para el fallo de REQ004
    Given que estoy autenticado para el fallo de REQ004
    And que estoy en la página de clientes para el fallo de REQ004
    When ingreso "ABC123" en el campo de búsqueda para el fallo de REQ004
    Then debería ver "Error: Cliente no encontrado" para el fallo de REQ004