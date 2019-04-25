describe('cypress', () => {

  it('should use custom assertion operator', async () => {
    cy.wrap('  hello').should('trimmedEqual', 'hello  ')
    cy.wrap('  hello').should('be.trimmedEqual', 'hello  ')
    cy.wrap('  hello').should('to.be.trimmedEqual', 'hello  ')
  })

})
