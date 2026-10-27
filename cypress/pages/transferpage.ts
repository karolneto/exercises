class TransferPage {
selectorsList = {
   transactionButton: '[data-test="nav-top-new-transaction"]',
   friend: '[data-test^="user-list-item-"]',
   ammountButton: '[name="amount"]',
   noteButton: '.MuiInputBase-root > [name="description"]',
   paymentButton: '[data-test="transaction-create-submit-payment"]',
   mineButtonTransactions: '[data-test="nav-personal-tab"]',
   pastTransactions: '.MuiPaper-elevation1',
   noTransactionButton: '[data-test="empty-list-header"] > .MuiTypography-root'
}

sendMoneyWithBalance() {
cy.get(this.selectorsList.transactionButton).click()
cy.get(this.selectorsList.friend).first().click({force: true})
cy.get(this.selectorsList.ammountButton).type("500")
cy.get(this.selectorsList.noteButton).type("Take this!")
cy.get(this.selectorsList.paymentButton).click()
cy.get('[data-test="alert-bar-success"]').should("be.visible")
}

sendMoneyWhitoutBalane() {
cy.get(this.selectorsList.transactionButton).click()
cy.get(this.selectorsList.friend).first().click({force: true})
cy.get(this.selectorsList.ammountButton).type("5500")
cy.get(this.selectorsList.noteButton).type("Take this girl!")
cy.get(this.selectorsList.paymentButton).click() 
}


visualizeTransactions() {
cy.get(this.selectorsList.mineButtonTransactions).click()
cy.get(this.selectorsList.pastTransactions).should("be.visible")
}

visualizeEmptyTransactions() {
cy.get(this.selectorsList.mineButtonTransactions).click()
cy.get(this.selectorsList.noTransactionButton).should("be.visible")
}

}

export default new TransferPage()