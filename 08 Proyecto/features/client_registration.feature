Feature: Actualizar información de clientes
  Como un administrador
  Necesito actualizar la información de clientes
  Para poder modificar la información de los clientes en el sistema

  Scenario: Actualización exitosa de un cliente existente
    Given que estoy autenticado
    And que estoy en la página de clientes
    When hago clic en el botón de editar para el cliente con CI "17111457896"
    And ingreso "Juan Actualizado" en el campo "first_name"
    And hago clic en el botón de guardar para el cliente con CI "17111457896"
    Then debería ver "Información del cliente actualizada exitosamente"

  Scenario: Fallo al actualizar un cliente inexistente
    Given que estoy autenticado
    And que estoy en la página de clientes
    When hago clic en el botón de editar para el cliente con CI "0000000000"
    And ingreso "Nombre Fallido" en el campo "first_name"
    And hago clic en el botón de guardar para el cliente con CI "0000000000"
    Then debería ver "Error: El cliente no existe"
