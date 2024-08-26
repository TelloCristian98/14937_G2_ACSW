Feature: Actualizar información de productos para el fallo de REQ010

  Scenario: Fallo al intentar actualizar un producto con precio negativo para el fallo de REQ010
    Given que estoy autenticado para el fallo de REQ010
    And que estoy en la página de productos para el fallo de REQ010
    When hago clic en el botón de editar para el producto con código "PROD001" para el fallo de REQ010
    And ingreso "-100" en el campo "costo_producto" para el fallo de REQ010
    And hago clic en el botón de guardar para el producto con código "PROD001" para el fallo de REQ010
    Then debería ver "Error: Precio inválido" para el fallo de REQ010