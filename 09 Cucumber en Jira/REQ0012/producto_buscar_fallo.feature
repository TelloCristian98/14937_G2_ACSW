Feature: Buscar información de productos
  Como un administrador
  Necesito buscar información de un producto
  Para poder acceder a sus detalles rápidamente

  Scenario: Fallo al buscar un producto con código incorrecto
    Given que estoy autenticado
    And que estoy en la página de productos
    When ingreso "XYZ123" en el campo de búsqueda
    Then debería ver "Error: Producto no encontrado"