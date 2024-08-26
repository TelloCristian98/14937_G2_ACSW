Feature: Buscar información de proveedores
  Como un administrador
  Necesito buscar información de un proveedor
  Para poder acceder a sus datos de manera rápida

  Scenario: Fallo al buscar un proveedor con nombre incorrecto
    Given que estoy autenticado
    And que estoy en la página de proveedores
    When ingreso "Proveedor Inexistente" en el campo de búsqueda
    Then debería ver "Error: Proveedor no encontrado"