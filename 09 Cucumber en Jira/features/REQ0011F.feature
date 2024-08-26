Feature: Inactivar un producto para el fallo de REQ011

  Scenario: Fallo al intentar inactivar un producto inexistente para el fallo de REQ011
    Given que estoy autenticado para el fallo de REQ011
    And que estoy en la página de productos para el fallo de REQ011
    When hago clic en el botón de inactivar para el producto con código "9999" para el fallo de REQ011
    Then debería ver "Error: El producto no existe" para el fallo de REQ011