Feature: Buscar clientes
  Como un administrador
  Necesito buscar clientes
  Para poder obtener información de un cliente de forma ágil

  Scenario: Búsqueda exitosa de un cliente existente
    Given que estoy autenticado
    And que estoy en la página de clientes
    When ingreso "1721286395" en el campo "campo"
    And hago clic en el botón "Buscar"
    Then debería ver "Juan Perez"

  Scenario: Fallo al buscar un cliente inexistente
    Given que estoy autenticado
    And que estoy en la página de clientes
    When ingreso "0000000000" en el campo "campo"
    And hago clic en el botón "Buscar"
    Then debería ver "No se encontraron resultados para el cliente con CI 0000000000"
