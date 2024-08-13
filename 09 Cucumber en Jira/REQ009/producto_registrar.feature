Feature: Registro de Productos
  Scenario: Registro exitoso de un nuevo producto
    Given que estoy autenticado como administrador de productos
    And que estoy en la página de registro de productos
    When ingreso "Producto A" en el campo "nombre_producto"
    And ingreso "12345" en el campo "codigo_producto"
    And ingreso "10" en el campo "cantidad_producto"
    And ingreso "5.99" en el campo "costo_producto"
    And hago clic en el botón "Registrar Producto"
    Then debería ver "Producto registrado exitosamente"
  Scenario: Registro fallido de un nuevo producto por campos vacíos
    Given que estoy autenticado
    And que estoy en la página de registro de productos
    When ingreso "" en el campo "nombre_producto"
    And ingreso "" en el campo "codigo_producto"
    And ingreso "" en el campo "cantidad_producto"
    And ingreso "" en el campo "costo_producto"
    And hago clic en el botón "Registrar Producto"
    Then debería ver "Por favor complete todos los campos"