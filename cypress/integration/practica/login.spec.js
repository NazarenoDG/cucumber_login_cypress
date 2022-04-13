/// <reference types='Cypress' />
require('cypress-xpath')



describe('Success Login', () =>{ 
    it('Test Sucess Login', () =>{
        cy.visit('/') 
        cy.title().should('eq','Swag Labs')
        cy.xpath("//input[@id='user-name']").should('be.visible').type("standard_user")
        cy.xpath("//input[@id='password']").should('be.visible').type("secret_sauce")
        cy.xpath("//input[@id='login-button']").click()
        cy.url().should('contain','/inventory.html')
    })
})