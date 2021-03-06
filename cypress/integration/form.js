describe('Form', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('it focuses the input', () => {
      cy.focused().should('have.class', 'form-control')
    })

    it('accepts input', () => {
        const input = "Learn about Cypress"
        cy.get('.form-control').type(input).should('have.value', input)
        cy.screenshot()
      })

      it('displays list of todo', () => {
        cy.get('li').should('have.length', 4)
      })

      it('adds a new todo', () => {
        const input = "Learn about cypress"
        cy.get('.form-control').type(input)
        cy.get('#addBtn').click()
        cy.get('li').should('have.length', 5)
      })

      it('deletes a todo', () => {
        cy.get('li').first()
          .find('.btn-danger').click()
          .get('li').should('have.length', 3)
      })
  })