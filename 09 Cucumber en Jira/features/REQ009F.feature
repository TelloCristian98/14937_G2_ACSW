Feature: Registrar un nuevo producto para el fallo de REQ009

  Scenario: Fallo al intentar registrar un producto con código duplicado para el fallo de REQ009
    Given que estoy autenticado para el fallo de REQ009
    And que estoy en la página de registro de productos para el fallo de REQ009
    When registro un producto con código "PROD123" para el fallo de REQ009
    And registro otro producto con el mismo código "PROD123" para el fallo de REQ009
    Then debería ver "Error: Código ya registrado" para el fallo de REQ009