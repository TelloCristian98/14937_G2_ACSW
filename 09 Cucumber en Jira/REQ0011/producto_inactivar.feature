Feature: Inactivación de Productos
  Scenario: Inactivación exitosa de un producto
    Given que tengo acceso a la gestión de productos
    And que estoy en la página de productos
    When hago clic en el botón "Inactivar" junto al producto "Producto A"
    Then debería ver "Producto inactivado exitosamente"
  Scenario: Inactivación fallida de un producto no existente
    Given que estoy autenticado
    And que estoy en la página de productos
    When hago clic en el botón "Inactivar" junto al producto "Producto No Existente"
    Then debería ver "Producto no encontrado"