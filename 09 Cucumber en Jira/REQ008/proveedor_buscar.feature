Feature: Búsqueda de Proveedores
  Scenario: Búsqueda exitosa de un proveedor existente
    Given que tengo acceso a la lista de proveedores
    And que estoy en la página de registro de proveedores
    When ingreso "La Favorita" en el campo "campo"
    Then debería ver "La Favorita"
  Scenario: Búsqueda fallida de un proveedor no existente
    Given que estoy autenticado
    And que estoy en la página de registro de proveedores
    When ingreso "Proveedor No Existente" en el campo "campo"
    Then debería ver "No hay datos"