fetch("http://localhost:4730/books")
  .then((response) => response.json())

  .then((data) => {
    const articles = data
      .map((book) => {
        const title = `<div class="book__title"><h3>${book.title}</h3></div>`;
        const author = `<p class="book__text book__author">Author: ${book.author}</p>`;
        const abstract = `<p class="book__text book__abstract">${book.abstract}</p>`;
        const details = `<a class="book__text book__details" href='./pages/book.html?isbn=${book.isbn}' class="book__text">Details</a>`;

        return `<article>${title}${author}${abstract}${details}</article>`;
      })
      .join("");
    const articleDiv = document.createElement("div");
    articleDiv.innerHTML = articles;
    articleDiv.className = "books";
    document.querySelector("main").appendChild(articleDiv);
  })
  .catch((error) => console.error(error));

const searchInput = document.querySelector("input");
searchInput.addEventListener("input", (e) => {
  // inside, we will need to achieve a few things:
  // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
  let value = e.target.value;

  // 2. check: if input exists and if input is larger than 0
  if (value && value.trim().length > 0) {
    // 3. redefine 'value' to exclude white space and change input to all lowercase
    value = value.trim().toLowerCase();
    // 4. return the results only if the value of the search is included in the person's name
    // we need to write code (a function for filtering through our data to include the search input value)
  } else {
    // 5. return nothing
    // input is invalid -- show an error message or show no results
  }
});
