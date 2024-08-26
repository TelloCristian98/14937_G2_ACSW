Feature: Buscar información de clientes
  Como un administrador
  Necesito buscar información de un cliente
  Para poder encontrar rápidamente sus datos

  Scenario: Fallo al buscar un cliente con CI incorrecto
    Given que estoy autenticado
    And que estoy en la página de clientes
    When ingreso "ABC123" en el campo de búsqueda
    Then debería ver "Error: Cliente no encontrado"