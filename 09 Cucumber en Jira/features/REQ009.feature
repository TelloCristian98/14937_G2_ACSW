Feature: Registro de Productos
  Scenario: Registro exitoso de un nuevo producto
    Given que estoy autenticado como administrador de productos en la aplicación
    And que estoy en la página de registro de productos de la aplicación del sistema
    When ingreso "Producto A" en el campo "nombre_producto"
    And ingreso "12345" en el input "codigo_producto"
    And ingreso "10" en el campo "cantidad_producto"
    And ingreso "5.99" en el campo "costo_producto"
    And hago clic en el botón "Registrar Producto"
    Then debería ver "Producto registrado exitosamente"