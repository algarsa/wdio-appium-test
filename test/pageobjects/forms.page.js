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
        return $('//*[@resource-id="android:id/message"]');
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
    get btnOk () {
        return $('//*[@content-desc="button-OK"]');
    }

    async enterForms () {
        await super.formsWidget.click();
    }
    async clickButtonActive () {
        await this.btnActive.click();
    }

    async pressBtnOk (){
        await super.btnOk.click();
    }
}

module.exports = new FormsPage();