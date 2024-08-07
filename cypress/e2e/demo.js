describe("Search", () => {
  it("tests Search", () => {
    cy.viewport(706, 929);
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("#bookSearch").click();
    cy.get("#bookSearch").type("hacking");
    cy.get("form p").click();
    //document.querySelector('[role="status"]').innerText ==  `We've found 2 books for "hacking"`
  });
});
