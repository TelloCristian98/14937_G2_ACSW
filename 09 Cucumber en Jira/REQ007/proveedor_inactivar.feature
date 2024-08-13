Feature: Inactivación de Proveedores
  Scenario: Inactivación exitosa de un proveedor
    Given que estoy listo para registrar un nuevo proveedor
    And que estoy en la página de registro de proveedores
    When hago clic en el botón "Inactivar" junto al proveedor "La Favorita"
    Then debería ver "Proveedor inactivado exitosamente"
  Scenario: Inactivación fallida de un proveedor no existente
    Given que estoy autenticado
    And que estoy en la página de registro de proveedores
    When hago clic en el botón "Inactivar" junto al proveedor "Proveedor No Existente"
    Then debería ver "Proveedor no encontrado"