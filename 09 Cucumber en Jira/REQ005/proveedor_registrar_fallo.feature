Feature: Registrar un nuevo proveedor
  Como un administrador
  Necesito registrar nuevos proveedores
  Para añadirlos a la lista del sistema

  Scenario: Fallo al intentar registrar un proveedor con email duplicado
    Given que estoy autenticado
    And que estoy en la página de registro de proveedores
    When registro un proveedor con email "proveedor@example.com"
    And registro otro proveedor con el mismo email "proveedor@example.com"
    Then debería ver "Error: Email ya registrado"