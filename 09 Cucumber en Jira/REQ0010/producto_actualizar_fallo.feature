Feature: Actualizar información de productos
  Como un administrador
  Necesito actualizar la información de productos
  Para poder modificar los detalles en el sistema

  Scenario: Fallo al intentar actualizar un producto con precio negativo
    Given que estoy autenticado
    And que estoy en la página de productos
    When hago clic en el botón de editar para el producto con código "PROD001"
    And ingreso "-100" en el campo "costo_producto"
    And hago clic en el botón de guardar para el producto con código "PROD001"
    Then debería ver "Error: Precio inválido"