Feature: Registro de Proveedores
  Scenario: Registro exitoso de un nuevo proveedor
    Given que estoy autenticado como administrador de proveedores para el test
    And que estoy en la página de registro de proveedores correctamente en el sistema
    When ingreso "La Favorita" en el campo "nombre_proveedor"
    And ingreso "AV. Amazonas" en el campo "direccion_proveedor"
    And ingreso "0978805846" en el campo "telefono_proveedor"
    And ingreso "proveedor@gmail.com" en el campo "email_proveedor"
    And hago clic en el botón "Registrar Proveedor" exitosamente
    Then debería ver "Proveedor registrado exitosamente"