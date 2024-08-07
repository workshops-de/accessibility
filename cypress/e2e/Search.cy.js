describe("Search", () => {
  it("tests Search", () => {
    cy.viewport(483, 963);
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("#bookSearch").click();
    cy.get("#bookSearch").type("hacking");
    cy.get("#content").click();
  });
});
