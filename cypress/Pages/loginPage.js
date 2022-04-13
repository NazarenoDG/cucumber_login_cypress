class homeSaucePage{

    elements = {
        usernameInput : () => cy.xpath("//input[@id='user-name']"),
        passwordInput : () => cy.xpath("//input[@id='password']"),
        loginBtn : () => cy.xpath("//input[@id='login-button']"),
        errorMessage : () => cy.get('h3[data-test="error"]')
    }
    
    typeUsername(username){
        this.elements.usernameInput().should('be.visible').type(username)
    }
    typePassword(password){
        this.elements.passwordInput().should('be.visible').type(password)
    }
    clickLogin(){
        this.elements.loginBtn().should('be.visible').click()
    }
    
}

module.exports = new homeSaucePage();