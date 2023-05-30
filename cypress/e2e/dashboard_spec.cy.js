import multipleStub from "../fixtures/multipleStub"
import singleStub from "../fixtures/singleStub"

describe('User dashboard with user flows', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('.card')
    cy.intercept({method: 'GET', url:'http://localhost:3001/api/v1/reservations'}, multipleStub)
    cy.intercept({method: 'GET', url:'http://localhost:3001/api/v1/reservations'}, singleStub)    
  })

  it('Should have a title', () => {
    cy.get('h1')
      .contains('Turing Cafe Reservations')
  })

  it('Should have a form with inputs for a name, date, time, number of guests, and a reservation button', () => {

    cy.get('form')
    cy.get('input[name="name"]') 
    cy.get('input[name="date"]') 
    cy.get('input[name="time"]')
    cy.get('input[name="number"]')
    cy.get('button')
      .contains('Make Reservation')  
  })

  it('Should have cards visible to the user with a name, date, time, and number of guests', () => {

    cy.get('#1')
      .find('p', 'Christie', '12/29', '7:00', '12')
    cy.get('#2')
      .find('p', 'Leta', '4/5', '7:00', '2')
    cy.get('#3')
      .find('p', 'Pam', '1/21', '6:00', '4')  
    cy.get('#4')
      .find('p', 'Khalid', '5/9', '7:30', '7')  
    cy.get('#5')
      .find('p', 'Will', '5/15', '6:30', '2')  
    cy.get('#6')
      .find('p', 'Eric', '5/30', '6:00', '8')  
    cy.get('#7')
      .find('p', 'Robbie', '6/5', '5:30', '2')  
    cy.get('#8')
      .find('p', 'Travis', '6/8', '7:00', '12')  
    cy.get('#9')
      .find('p', 'Brittany', '9/9', '7:30', '3')    
  })

  it('Should update the form appropriately based off of user input and then create a card based off of the inputs', () => {

    cy.get('input[name="name"]')
      .type('Trey').should('have.value', 'Trey') 
    cy.get('input[name="date"]')
      .type('12/19').should('have.value', '12/19') 
    cy.get('input[name="time"]')
      .type('7:45').should('have.value', '7:45')
    cy.get('input[name="number"]')
      .type('3').should('have.value', '3')
    cy.get('button')
      .click()
    cy.get('.card')
      .contains('p', 'Trey', '12/19', '7:45', '3')    
  })
})