Feature: Inactivar un proveedor
  Como un administrador
  Necesito inactivar proveedores no activos
  Para mantener actualizada la lista de proveedores

  Scenario: Fallo al intentar inactivar un proveedor inexistente
    Given que estoy autenticado
    And que estoy en la página de proveedores
    When hago clic en el botón de inactivar para el proveedor con nombre "Proveedor Fantasma"
    Then debería ver "Error: El proveedor no existe"