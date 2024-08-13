Feature: Inactivar clientes
  Como un administrador
  Necesito inactivar clientes
  Para poder desactivar un cliente no frecuente

  Scenario: Inactivación exitosa de un cliente
    Given que estoy autenticado
    And que estoy en la página de clientes
    When hago clic en el botón de confirmar para el cliente con CI "1721286395"
    Then debería ver "Cliente inactivado exitosamente"

  Scenario: Fallo al inactivar un cliente inexistente
    Given que estoy autenticado
    And que estoy en la página de clientes
    When hago clic en el botón de confirmar para el cliente con CI "0000000000"
    Then debería ver "Error: El cliente no existe o ya está inactivo"
