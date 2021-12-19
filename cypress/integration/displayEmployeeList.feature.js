describe('Display list of employees', () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("is expected to see a header", () => {
    cy.get("#header").should("contain.text", "Employee List");
  });
  })
  