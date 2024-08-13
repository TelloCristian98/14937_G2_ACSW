Feature: Buscar clientes


  Scenario: Búsqueda exitosa de un cliente existente
    Given que estoy autenticado dentro del sistema
    And que estoy en la página de clientes para el feature 4
    When ingreso "1721286395" en el campo "campo"
    And hago clic en el botón "Buscar" del sistema
    Then debería ver "Juan Perez"