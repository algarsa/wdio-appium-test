const Page = require('./page');

class LoginPage extends Page {
    get btnSignUpContainer () {
        return $('//*[@content-desc="button-sign-up-container"]');
    }

    get btnLoginContainer () {
        return $('//*[@content-desc="button-login-container"]');
    }

    get inputEmail () {
        return $('~input-email');
    }

    get inputPassword () {
        return $('~input-password');
    }

    get inputRepeatPassword () {
        return $('~input-repeat-password');
    }

    get btnSignUp () {
        return $('//*[@content-desc="button-SIGN UP"]');
    }

    get btnLogin () {
        return $('//*[@content-desc="button-LOGIN"]');
    }

    get popupSignupSuccessMessage() {
        return $('//android.widget.TextView[contains(@text, "You successfully signed up!")]');
    }

    get popupLoginSuccessMessage() {
        return $('//android.widget.TextView[contains(@text, "You are logged in!")]');
    }

    get txtAlertInvalidEmail () {
        return $('//android.widget.TextView[contains(@text, "Please enter a valid email address")]');
    }

    get txtAlertInvalidPassword () {
        return $('//android.widget.TextView[contains(@text, "Please enter at least 8 characteres")]');
    }

    get txtAlertInvalidConfirmPassword () {
        return $('//android.widget.TextView[contains(@text, "Please enter the same password")]');
    }
    get btnOk () {
        return $('*//android.widget.Button[@text="OK"]');
    }

    async signUp (email, password) {
        await super.loginWidget.click();
        await this.btnSignUpContainer.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputRepeatPassword.setValue(password);
        await this.btnSignUp.click();
    }
    async signUpInvalid (email, password, invalid_password) {
        await super.loginWidget.click();
        await this.btnSignUpContainer.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputRepeatPassword.setValue(invalid_password);
        await this.btnSignUp.click();
    }

    async pressBtnOk (){
        await this.btnOk.click();
    }

    async login (email, password) {
        await super.loginWidget.click();
        await this.btnLoginContainer.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage();
