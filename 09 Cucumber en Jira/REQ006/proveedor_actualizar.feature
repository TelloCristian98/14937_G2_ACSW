Feature: Actualización de Proveedores
  Scenario: Actualización exitosa de la información de un proveedor
    Given que estoy en la página de búsqueda de proveedores
    And que estoy en la página de registro de proveedores
    When ingreso "Nuevo Nombre" en el campo "Nombre_Proveedor"
    And ingreso "Nueva Dirección" en el campo "Direccion_Proveedor"
    And hago clic en el botón "Guardar Cambios"
    Then debería ver "Información actualizada exitosamente"
  Scenario: Actualización fallida de la información de un proveedor
    Given que estoy autenticado
    And que estoy en la página de registro de proveedores
    When ingreso "" en el campo "Nombre_Proveedor"
    And hago clic en el botón "Guardar Cambios"
    Then debería ver "Por favor complete todos los campos"