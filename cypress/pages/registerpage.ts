class RegisterPage {
selectorsList= {
firstName: '[name="firstName"]',
lastName: '[name="lastName"]',
username: '[name="username"]',
password: '[name="password"]',
confirmPassword: '[name="confirmPassword"]',
registerButton: '[data-test="signup-submit"]',
registerPage: "http://localhost:3000/signup"
}


acessRegisterPage() {
    cy.visit(this.selectorsList.registerPage)
}

registerValidInformation() {
    cy.get(this.selectorsList.firstName).type("Joaozinho")
    cy.get(this.selectorsList.lastName).type("Ferreira")
    cy.get(this.selectorsList.username).type("joaozinhoferreira")
    cy.get(this.selectorsList.password).type("Joaozinhoferreira123")
    cy.get(this.selectorsList.confirmPassword).type("Joaozinhoferreira123")
    cy.get(this.selectorsList.registerButton).click()
}


registerInvalidInformation() {
    cy.get(this.selectorsList.firstName).type("Joaozinho")
    cy.get(this.selectorsList.lastName).click()
    cy.get(this.selectorsList.username).type("joaozinhoferreira")
    cy.get(this.selectorsList.password).type("Joaozinhoferreira123")
    cy.get(this.selectorsList.confirmPassword).type("Joaozinhoferreira123")
    cy.contains("Last Name is required")
}

}

export default new RegisterPage()