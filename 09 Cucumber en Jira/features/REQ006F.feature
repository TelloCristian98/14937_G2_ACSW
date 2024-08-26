Feature: Actualización de Proveedores para el fallo de REQ006
  Scenario: Actualización exitosa de la información de un proveedor para el fallo de REQ006
    Given que estoy en la página de búsqueda de proveedores para el fallo de REQ006
    And que estoy en la página de registro de proveedores para el fallo de REQ006
    When ingreso "Nuevo Nombre" en el campo "Nombre_Proveedor" para el fallo de REQ006
    And ingreso "Nueva Dirección" en el campo "Direccion_Proveedor" para el fallo de REQ006
    And hago clic en el botón "Guardar Cambios" para el fallo de REQ006
    Then debería ver "Información actualizada exitosamente" para el fallo de REQ006