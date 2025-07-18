const LoginPage = require('../pageobjects/login.page')
import { expect } from 'chai'
import { siteCredentials as credentials } from '../utils/utils'

describe('Login/Sign Up Form', () => {
    it('should not signup with invalid email', async () => {
        await LoginPage.signUp(credentials.invalid_email, credentials.password)
        await expect(LoginPage.txtAlertInvalidEmail).toBeExisting()
    })

    it('should not signup with invalid password', async () => {
        await LoginPage.signUp(credentials.email, credentials.invalid_password)
        await expect(LoginPage.txtAlertInvalidPassword).toBeExisting()
    })

    it('should not signup with invalid confirm password', async () => {
        await LoginPage.signUpInvalid(credentials.email, credentials.password, credentials.invalid_email)
        await expect(LoginPage.txtAlertInvalidConfirmPassword).toBeExisting()
    })
    
    it('should signup with valid credentials', async () => {
        await LoginPage.signUp(credentials.email, credentials.password)
        await expect(LoginPage.popupSignupSuccessMessage).toBeExisting()
        await expect(LoginPage.popupSignupSuccessMessage).toHaveTextContaining('You successfully signed up!')
        await LoginPage.pressBtnOk()
    })

    it('should not login with invalid email', async () => {
        await LoginPage.login(credentials.invalid_email, credentials.password)
        await expect(LoginPage.txtAlertInvalidEmail).toBeExisting()
    })

    it('should not login with invalid password', async () => {
        await LoginPage.login(credentials.email, credentials.invalid_password)
        await expect(LoginPage.txtAlertInvalidPassword).toBeExisting()
    })

    it('should login with valid credentials', async () => {
        await LoginPage.login(credentials.email, credentials.password)
        await expect(LoginPage.popupLoginSuccessMessage).toBeExisting()
        await expect(LoginPage.popupLoginSuccessMessage).toHaveTextContaining('You are logged in!')
        await LoginPage.pressBtnOk()
    })
})