describe('API Testing with Cypress', () => {

    beforeEach(() => {
        cy.request("https://pokeapi.co/api/v2/pokemon/132").as('ditto');
    });
 
    it('Validate the header', () => {
        cy.get('@ditto')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
 
    it('Validate the status code', () => {
        cy.get('@ditto')
            .its('status')
            .should('equal', 200);
    });
 
    it('Validate the pokemon\'s name', () => {
        cy.get('@ditto')
            .its('body')
            .should('include', { name: 'ditto' });
            
    });
 });