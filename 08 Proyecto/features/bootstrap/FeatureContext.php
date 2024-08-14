<?php

use Behat\Behat\Context\Context;
use Behat\MinkExtension\Context\MinkContext;
use PHPUnit\Framework\Assert as Assertions;

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends MinkContext implements Context
{
    /**
     * Initializes context.
     */
    public function __construct()
    {
    }

    /**
     * @Given que estoy autenticado
     */
    public function queEstoyAutenticado()
    {
        // Añade una cookie de sesión simulada
        $this->getSession()->setCookie('PHPSESSID', 'dummy_session_id');
        echo "Simulated session cookie set\n";
    }

    /**
     * @Given que estoy en la página de clientes
     */
    public function queEstoyEnLaPaginaDeClientes()
    {
        $this->visit('/php/clientes_panel.php');
        echo "Visited clients management page\n";
    }

    /**
     * @When ingreso :value en el campo :field
     */
    public function ingresoEnElCampo($value, $field)
    {
        $this->fillField($field, $value);
        echo "Filled field $field with value $value\n";
    }

    /**
     * @When hago clic en el botón :button
     */
    public function hagoClicEnElBoton($button)
    {
        $this->pressButton($button);
        echo "Clicked button $button\n";
    }

    /**
     * @When hago clic en el botón de editar para el cliente con CI :ci
     */
    public function hagoClicEnElBotonDeEditarParaElClienteConCI($ci)
    {
        $page = $this->getSession()->getPage();
        $clientRow = $page->find('xpath', "//tr[td//text()='{$ci}']");

        if ($clientRow) {
            $editButton = $clientRow->find('css', '.editBtn');
            if ($editButton) {
                $editButton->click();
                echo "Clicked edit button for client with CI $ci\n";
            } else {
                throw new \Exception("Edit button not found for client with CI $ci");
            }
        } else {
            throw new \Exception("Client with CI $ci not found");
        }
    }

    /**
     * @When hago clic en el botón de guardar para el cliente con CI :ci
     */
    public function hagoClicEnElBotonDeGuardarParaElClienteConCI($ci)
    {
        $page = $this->getSession()->getPage();
        $clientRow = $page->find('xpath', "//tr[td//text()='{$ci}']");

        if ($clientRow) {
            $saveButton = $clientRow->find('css', '.saveBtn');
            if ($saveButton) {
                $saveButton->click();
                echo "Clicked save button for client with CI $ci\n";
            } else {
                throw new \Exception("Save button not found for client with CI $ci");
            }
        } else {
            throw new \Exception("Client with CI $ci not found");
        }
    }

    /**
     * @When hago clic en el botón de confirmar para el cliente con CI :ci
     */
    public function hagoClicEnElBotonDeConfirmarParaElClienteConCI($ci)
    {
        $page = $this->getSession()->getPage();
        $clientRow = $page->find('xpath', "//tr[td//text()='{$ci}']");

        if ($clientRow) {
            $confirmButton = $clientRow->find('css', '.confirmBtn');
            if ($confirmButton) {
                $confirmButton->click();
                echo "Clicked confirm button for client with CI $ci\n";
            } else {
                throw new \Exception("Confirm button not found for client with CI $ci");
            }
        } else {
            throw new \Exception("Client with CI $ci not found");
        }
    }

    /**
     * @Then debería ver :text
     */
    public function deberiaVer($text)
    {
        $this->assertSession()->pageTextContains($text);
        echo "Checked for text $text\n";
    }
}
