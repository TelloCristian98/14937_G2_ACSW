Feature: Registro de Proveedores
  Scenario: Registro exitoso de un nuevo proveedor
    Given que estoy autenticado como administrador de proveedores
    And que estoy en la página de registro de proveedores
    When ingreso "La Favorita" en el campo "nombre_proveedor"
    And ingreso "AV. Amazonas" en el campo "direccion_proveedor"
    And ingreso "0978805846" en el campo "telefono_proveedor"
    And ingreso "proveedor@gmail.com" en el campo "email_proveedor"
    And hago clic en el botón "Registrar Proveedor"
    Then debería ver "Proveedor registrado exitosamente"
  Scenario: Registro fallido de un nuevo proveedor por campos vacíos
    Given que estoy autenticado
    And que estoy en la página de registro de proveedores
    When ingreso "" en el campo "nombre_proveedor"
    And ingreso "" en el campo "direccion_proveedor"
    And ingreso "" en el campo "telefono_proveedor"
    And ingreso "" en el campo "email_proveedor"
    And hago clic en el botón "Registrar Proveedor"
    Then debería ver "Por favor complete todos los campos"