const FormsPage = require('../pageobjects/forms.page')
import { expect } from 'chai'

describe('Forms form', () => {
    it('should Input field have text Type something', async () => {
        await FormsPage.enterForms()
        await expect(FormsPage.txtInputField).toBeExisting()
    })

    it('should Switch field have text Click to trun the switch OFF', async () => {
        await expect(FormsPage.txtSwitch).toBeExisting()
    })
    
    it('should appear a pop-up when pressing the Active button', async () => {
        await FormsPage.clickButtonActive()
        await expect(FormsPage.popupButton).toBeExisting()
        await expect(FormsPage.popupButton).toHaveTextContaining('This button is active')
    })
})