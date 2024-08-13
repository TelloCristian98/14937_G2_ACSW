Feature: Búsqueda de Productos
  Scenario: Búsqueda exitosa de un producto existente
    Given que estoy en la página de búsqueda de productos
    And que estoy en la página de productos
    When ingreso "Producto A" en el campo "campoUno"
    Then debería ver "Producto A"
  Scenario: Búsqueda fallida de un producto no existente
    Given que estoy autenticado
    And que estoy en la página de productos
    When ingreso "Producto No Existente" en el campo "campoUno"
    Then debería ver "No hay datos"