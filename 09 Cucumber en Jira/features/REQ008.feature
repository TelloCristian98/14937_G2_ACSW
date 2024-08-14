Feature: Búsqueda de Proveedores
  Scenario: Búsqueda exitosa de un proveedor existente
    Given que tengo acceso a la lista de proveedores del sistema
    And que estoy en la página de registro de proveedores correctamente
    When ingreso "La Favorita" en el campo "campo"
    Then debería ver "La Favorita"