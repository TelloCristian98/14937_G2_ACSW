Feature: Actualizar información de proveedores
  Como un administrador
  Necesito actualizar la información de proveedores
  Para poder modificar la información en el sistema

  Scenario: Fallo al intentar actualizar un proveedor con datos incorrectos
    Given que estoy autenticado
    And que estoy en la página de proveedores
    When hago clic en el botón de editar para el proveedor con nombre "Proveedor Uno"
    And ingreso "@" en el campo "email_proveedor"
    And hago clic en el botón de guardar para el proveedor con nombre "Proveedor Uno"
    Then debería ver "Error: Email inválido"