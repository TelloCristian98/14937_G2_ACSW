Feature: Actualizar información de clientes
  Como un administrador
  Necesito actualizar la información de clientes
  Para poder modificar la información de los clientes en el sistema

  Scenario: Actualización fallida por datos inválidos
    Given que estoy autenticado
    And que estoy en la página de clientes
    When hago clic en el botón de editar para el cliente con CI "17111457896"
    And ingreso "123" en el campo "first_name"
    And hago clic en el botón de guardar para el cliente con CI "17111457896"
    Then debería ver "Error: Nombre inválido"
