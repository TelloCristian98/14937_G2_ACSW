Feature: Buscar información de productos para el fallo de REQ012

  Scenario: Fallo al buscar un producto con código incorrecto para el fallo de REQ012
    Given que estoy autenticado para el fallo de REQ012
    And que estoy en la página de productos para el fallo de REQ012
    When ingreso "XYZ123" en el campo de búsqueda para el fallo de REQ012
    Then debería ver "Error: Producto no encontrado" para el fallo de REQ012