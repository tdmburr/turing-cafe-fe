import multipleStub from "../fixtures/multipleStub"
import singleStub from "../fixtures/singleStub"

describe('User dashboard with user flows', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .get('.card')
    cy.intercept('http://localhost:3001/api/v1/reservations', multipleStub)
    cy.intercept('http://localhost:3001/api/v1/reservations', singleStub)    
  })

  it('Should have a title', () => {
    cy.get('h1')
      .contains('Turing Cafe Reservations')
  })

  it('Should have a form with inputs for a name ')
})