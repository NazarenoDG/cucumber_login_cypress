import { DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "cypress/../../cypress/Pages/loginPage";
require('cypress-xpath')
const LoginPage = require('cypress/../../cypress/Pages/loginPage')


Given('A user enters to the login page', () => {
    cy.visit('/')
})

When('A user enters the username {string}', (username) => {
    LoginPage.typeUsername(username)
})
When('A user provides incorrect credentials', (table)=>{
    table.hashes().forEach(row => {
        cy.log(row.username)
        cy.log(row.password)
        LoginPage.typeUsername(row.username)
        LoginPage.typePassword(row.password)
    });
})
And('A user enters the password {string}', (password) => {
    LoginPage.typePassword(password)
})

And('A user clicks on the login button', () => {
    LoginPage.clickLogin()
})
Then('A user will be logged in', () => {
    cy.url().should('contain','/inventory.html')
})
Then('The error message {string} is displayed', (errorMessage) => {
   LoginPage.elements.errorMessage().should('have.text',errorMessage)
})


When('A user enters the password {string}', (password) => {
    LoginPage.typePassword(password)
})
And('A user no enters the username {string}', () => {
    cy.xpath("//input[@id='user-name']").should('be.visible').type("asd").clear()
})
And('A user no enters the password {string}', () => {
    cy.xpath("//input[@id='password']").should('be.visible').type("asd").clear()
})
