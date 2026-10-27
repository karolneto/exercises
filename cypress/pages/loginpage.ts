 class LoginPage {
selectorsList = {
signinPage: "http://localhost:3000/signin",
username: '[name="username"]',
password: '[name="password"]',
loginButton: '[data-test="signin-submit"]',
initialPage: '[data-test="app-name-logo"]',
loginError: '.MuiAlert-message'
}

acessLoginPage() {
cy.visit(this.selectorsList.signinPage)
}

fillValidLogin() {
  cy.get(this.selectorsList.username).type("Heath93")
  cy.get(this.selectorsList.password).type("s3cret")  
  cy.get(this.selectorsList.loginButton).click()
  cy.get(this.selectorsList.initialPage)
}


fillInvalidLogin() {
    cy.get(this.selectorsList.username).type("testezinho")
    cy.get(this.selectorsList.password).type("senhaerrada")  
    cy.get(this.selectorsList.loginButton).click()
    cy.get(this.selectorsList.loginError)
  }

newUserLogin() {
  cy.get(this.selectorsList.username).type("lalala")
  cy.get(this.selectorsList.password).type("lalala")  
  cy.get(this.selectorsList.loginButton).click()
  cy.get(this.selectorsList.initialPage)
}

}

export default new LoginPage()

