Feature: Inactivar clientes

  Scenario: Inactivación exitosa de un cliente
    Given que estoy autenticado en el sistema del cliente
    And que estoy en la página de clientes para la prueba
    When hago clic en el botón de confirmar para el cliente con CI "1721286395"
    Then debería ver "Cliente inactivado exitosamente"