Feature: Inactivar un proveedor para el fallo de REQ007

  Scenario: Fallo al intentar inactivar un proveedor inexistente para el fallo de REQ007
    Given que estoy autenticado para el fallo de REQ007
    And que estoy en la página de proveedores para el fallo de REQ007
    When hago clic en el botón de inactivar para el proveedor con nombre "Proveedor Fantasma" para el fallo de REQ007
    Then debería ver "Error: El proveedor no existe" para el fallo de REQ007