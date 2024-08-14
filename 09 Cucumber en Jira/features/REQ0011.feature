Feature: Inactivación de Productos
  Scenario: Inactivación exitosa de un producto
    Given que tengo acceso a la gestión de productos del feature 11
    And que estoy en la página de productos con exito
    When hago clic en el botón "Inactivar" junto al producto "Producto A"
    Then debería ver "Producto inactivado exitosamente"