Feature: Registro de Proveedores para el fallo de REQ005
  Scenario: Registro exitoso de un nuevo proveedor para el fallo de REQ005
    Given que estoy autenticado como administrador de proveedores para el fallo de REQ005
    And que estoy en la página de registro de proveedores para el fallo de REQ005
    When ingreso "La Favorita" en el campo "nombre_proveedor" para el fallo de REQ005
    And ingreso "AV. Amazonas" en el campo "direccion_proveedor" para el fallo de REQ005
    And ingreso "0978805846" en el campo "telefono_proveedor" para el fallo de REQ005
    And ingreso "proveedor@gmail.com" en el campo "email_proveedor" para el fallo de REQ005
    And hago clic en el botón "Registrar Proveedor" para el fallo de REQ005
    Then debería ver "Proveedor registrado exitosamente" para el fallo de REQ005