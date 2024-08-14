Feature: Actualización de Productos 
  Scenario: Actualización exitosa de la información de un producto
    Given que estoy en la página de registro de productos para el test
    And que estoy en la página de productos correctamente
    When ingreso "Nuevo Producto B" en el campo "nombre_producto"
    And ingreso "123456" en el campo "codigo_producto"
    And hago clic en el botón "Guardar Cambios "
    Then debería ver "Información actualizada exitosamente "