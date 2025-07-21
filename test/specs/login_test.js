const LoginPage = require('../pageobjects/login.page.js')
const credentials = context.logins;
import { expect } from 'chai'
import { context } from '../data/Context';

describe('Login/Sign Up Form', () => {
    it('should not signup with invalid email', async () => {
        await LoginPage.signUp(credentials.invalid_email, credentials.password)
        await expect(LoginPage.txtAlertInvalidEmail)
    })

    it('should not signup with invalid password', async () => {
        await LoginPage.signUp(credentials.email, credentials.invalid_password)
        await expect(LoginPage.txtAlertInvalidPassword)
    })

    it('should not signup with invalid confirm password', async () => {
        await LoginPage.signUpInvalid(credentials.email, credentials.password, credentials.invalid_email)
        await expect(LoginPage.txtAlertInvalidConfirmPassword)
    })
    
    it('should signup with valid credentials', async () => {
        await LoginPage.signUp(credentials.email, credentials.password)
        await expect(LoginPage.popupSignupSuccessMessage)
        await LoginPage.pressBtnOk()
    })

    it('should not login with invalid email', async () => {
        await LoginPage.login(credentials.invalid_email, credentials.password)
        await expect(LoginPage.txtAlertInvalidEmail)
    })

    it('should not login with invalid password', async () => {
        await LoginPage.login(credentials.email, credentials.invalid_password)
        await expect(LoginPage.txtAlertInvalidPassword)
    })

    it('should login with valid credentials', async () => {
        await LoginPage.login(credentials.email, credentials.password)
        await expect(LoginPage.popupLoginSuccessMessage)
    })
})
