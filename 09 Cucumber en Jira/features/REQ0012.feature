Feature: Búsqueda de Productos
  Scenario: Búsqueda exitosa de un producto existente
    Given que estoy en la página de búsqueda de productos del feature 12
    And que estoy en la página de productos correctamente en el feature 12
    When ingreso "Producto A" en el campo "campoUno"
    Then debería ver "Producto A"