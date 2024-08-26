Feature: Registrar un nuevo producto
  Como un administrador
  Necesito registrar nuevos productos
  Para añadirlos al inventario

  Scenario: Fallo al intentar registrar un producto con código duplicado
    Given que estoy autenticado
    And que estoy en la página de registro de productos
    When registro un producto con código "PROD123"
    And registro otro producto con el mismo código "PROD123"
    Then debería ver "Error: Código ya registrado"