const Page = require('./page');

class FormsPage extends Page {
    
    get inputInputField () {
        return $('~text-input');
    }

    get inputTextResult () {
        return $('~input-text-result');
    }

    get switchSwitch () {
        return $('~switch');
    }

    get txtSwitch () {
        return $('~switch-text');
    }

    get selectDropdown () {
        return $('~select-Dropdown');
    }

    get btnActive () {
        return $('//*[@content-desc="button-Active"]');
    }

    get btnInactive () {
        return $('//*[@content-desc="button-Inactive"]');
    }

    get popupButton() {
        return $('//android.widget.TextView[contains(@text, "This button is active")]');
    }

    get txtInputField () {
        return $('//android.widget.TextView[contains(@text, "Type something")]');
    }

    get txtSwitch () {
        return $('//android.widget.TextView[contains(@text, "Click to turn the switch OFF")]');
    }

    get txtDropdown () {
        return $('//android.widget.TextView[contains(@text, "Select an item")]');
    }

    async enterForms () {
        await super.formsWidget.click();
    }
    async clickButtonActive () {
        await this.btnActive.click();
    }
}

module.exports = new FormsPage();
