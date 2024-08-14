Feature: Actualización de Proveedores
  Scenario: Actualización exitosa de la información de un proveedor
    Given que estoy en la página de búsqueda de proveedores
    And que estoy en la página de registro de proveedores
    When ingreso "Nuevo Nombre" en el campo "Nombre_Proveedor"
    And ingreso "Nueva Dirección" en el campo "Direccion_Proveedor"
    And hago clic en el botón "Guardar Cambios" del feature 6
    Then debería verse "Información actualizada exitosamente"