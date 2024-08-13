Feature: Actualización de Productos
  Scenario: Actualización exitosa de la información de un producto
    Given que estoy en la página de registro de productos
    And que estoy en la página de productos
    When ingreso "Nuevo Producto A" en el campo "nombre_producto"
    And ingreso "12345" en el campo "codigo_producto"
    And hago clic en el botón "Guardar Cambios"
    Then debería ver "Información actualizada exitosamente"
  Scenario: Actualización fallida de la información de un producto
    Given que estoy autenticado
    And que estoy en la página de productos
    When ingreso "" en el campo "nombre_producto"
    And hago clic en el botón "Guardar Cambios"
    Then debería ver "Por favor complete todos los campos"