Feature: Actualizar información de clientes

  Scenario: Fallo al buscar un cliente inexistente
    Given que estoy autenticado en el sistema
    And que estoy en la página de clientes
    When ingreso "0000000000" en el campo "campo"
    And hago clic en el botón "Buscar"
    Then debería ver "No se encontraron resultados para el cliente con CI 0000000000"
