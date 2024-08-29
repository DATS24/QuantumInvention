
describe('Test cases', () => {
  before(() => {
    cy.visit('https://www.traveloka.com/')
  })

  it('All Test Cases', () => {
    //1
    let Keyword = 'Bandung'
    cy.get('[data-testid="product-pill-Hotels"]').click({force:true})
    cy.get('[placeholder="City, hotel, place to go"]').should('be.visible').click({force:true}).type(Keyword+'{enter}')
    cy.get('[data-testid="dropdown-menu-item"]').contains('span', Keyword).click({force:true})
    //2
    cy.get('[data-testid="check-in-date-field"]').click({force:true})
    cy.get('[class="css-1dbjc4n r-1awozwy r-kdyh1x r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr"]').then(($list) => {
      cy.get($list).eq(7).click({force:true})
      //3
      cy.get($list).eq(8).click({force:true})
    })
    //4
    cy.get('[data-testid="occupancy-field"]').click({force:true})
    cy.get('[data-testid="occupancy-adult"]').within(() => {
      cy.get('[stroke="#0194f3"]').click({force:true})
    })
    //5
    cy.get('[data-testid="search-submit-button"]').click({force:true})
    //6
    cy.get('[data-testid="tvat-hotelLocation"').each(($el) => {
      cy.wrap($el).should("contain.text", "Bandung")
    })
  })
})