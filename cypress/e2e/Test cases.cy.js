
describe('Test cases', () => {
  beforeEach(() => {
    cy.visit('https://www.onemap.gov.sg/')
  })

  afterEach(() => {
    cy.window().then((win) => {
      cy.stub(win, 'close').as('close')
    })
  })

  it ('Search a place on map', () => {
    let Keyword = 'CHANGI'
    cy.get('.search-location-input').type(Keyword)
    cy.wait(5000)
    cy.get('.searchresult_name').contains(Keyword).click()
    cy.get('.markerInfoboxwrapper').should('contain', Keyword)
  })

  it ('Search a nearby', () => {
    let Keyword = 'Nearby '
    cy.get('.search-location-input').type(Keyword)
    cy.wait(5000)
    cy.get('.searchresult_address').contains('Search '+Keyword).click()
    cy.get('#markerInfoboxwrapper').click({force:true}).should('exist')
  })

  it ('Search school by school query map apps', () => {
    let Keyword = 'Map Apps '
    cy.get('.search-location-input').type(Keyword)
    cy.wait(5000)
    cy.get('.searchresult_name').contains('School Query').click()
    cy.get('#secSchool').click()
    cy.get('.schoolQueryDisclaimerBlockBtn').click()
    cy.get('.schoolListItem').first().click().invoke('text').as('Result')
    const Result = this.Result
    cy.get('#markerInfoContent').should('contain.text', Result)
  })

  it ('Search land lot number by map apps', () => {
    let Keyword = 'Map Apps '
    cy.get('.search-location-input').type(Keyword)
    cy.wait(5000)
    cy.get('.searchresult_name').contains('Land Query').click()
    cy.get('.landinfo-tenure').click()
    cy.get('.landInfoTenureDisclaimerBlockBtn').click()
    cy.get('#tenure-address-strata').click()
    cy.get('#prefix').type('26')
    cy.get('#lot-no').type('08092')
    cy.get('#suffix').type('A')
    cy.get('.btn-big.tenure-search').click({force:true})
    cy.get('.cl-body').should('exist')
  })

  it ('Search drone zone by map apps', () => {
    let Keyword = 'Map Apps '
    cy.get('.search-location-input').type(Keyword)
    cy.wait(5000)
    cy.get('.searchresult_name').contains('Drone Query').click()
    cy.get('.dronebtnAccept').click()
  })

  it ('Search nearby by nearby info map apps', () => {
    let Keyword = 'Map Apps '
    cy.get('.search-location-input').type(Keyword)
    cy.wait(5000)
    cy.get('.searchresult_name').contains('Nearby Info').click()
    cy.get('#Amenities').click()
    cy.get('#axs_station').click()
    cy.get('#markerInfoTitle').should('exist')
  })
  
  it ('Search nearby by nearby info map apps', () => {
    let Keyword = 'Map Apps '
    cy.get('.search-location-input').type(Keyword)
    cy.wait(5000)
    cy.get('.searchresult_name').contains('Nearby Info').click()
    cy.get('#Amenities').click()
    cy.get('#axs_station').click()
    cy.get('#markerInfoTitle').should('exist')
  })

  it ('Choose map style by map apps', () => {
    let Keyword = 'Map Apps '
    cy.get('.search-location-input').type(Keyword)
    cy.wait(5000)
    cy.get('.searchresult_name').contains('Map Styles').click()
    cy.get('[basemapid="Original"]').click()
  })

  it ('Search a route', () => {
    let origin = 'changi'
    let destination = 'welfare'
    cy.get('#originInput').type(origin+{enter})
    cy.get('#destLocation').type(destination+{enter})
    cy.wait(5000)
    cy.get('#routeOptionItem_Car').click()
    cy.get('#itineraryItem').should('be.visible')
  })
})