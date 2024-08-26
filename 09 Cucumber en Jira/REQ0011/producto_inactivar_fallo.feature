Feature: Inactivar un producto
  Como un administrador
  Necesito inactivar productos obsoletos
  Para mantener la lista de productos actualizada

  Scenario: Fallo al intentar inactivar un producto inexistente
    Given que estoy autenticado
    And que estoy en la página de productos
    When hago clic en el botón de inactivar para el producto con código "9999"
    Then debería ver "Error: El producto no existe"