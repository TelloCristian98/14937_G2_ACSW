Feature: Buscar información de proveedores para el fallo de REQ008

  Scenario: Fallo al buscar un proveedor con nombre incorrecto para el fallo de REQ008
    Given que estoy autenticado para el fallo de REQ008
    And que estoy en la página de proveedores para el fallo de REQ008
    When ingreso "Proveedor Inexistente" en el campo de búsqueda para el fallo de REQ008
    Then debería ver "Error: Proveedor no encontrado" para el fallo de REQ008