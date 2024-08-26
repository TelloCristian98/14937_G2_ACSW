Feature: Inactivar un cliente
  Como un administrador
  Necesito inactivar clientes no frecuentes
  Para poder mantener el sistema organizado

  Scenario: Fallo al intentar inactivar un cliente inexistente
    Given que estoy autenticado
    And que estoy en la página de clientes
    When hago clic en el botón de inactivar para el cliente con CI "9999999999"
    Then debería ver "Error: El cliente no existe"