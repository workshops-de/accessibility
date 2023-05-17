fetch("http://localhost:4730/books")
  .then((response) => response.json())

  .then((data) => {
    const table = document.createElement("table");
    const numberOfBooks = data.length;
    const uniqueAuthors = new Set();
    const uniquePublisher = new Set();
    let overallValue = 0;
    let numberOfPages = 0;

    data.map((book) => {
      numberOfPages = numberOfPages + (book.numPages || 0);
      overallValue = overallValue + convertPriceToNumber(book.price);
      uniqueAuthors.add(book.author);
      uniquePublisher.add(book.publisher);
    });

    const numberOfBooksRow = `<tr><td>Number of books:</td><td>${numberOfBooks} books</td></tr>`;
    const uniqueAuthorsRow = `<tr><td>Number of authors: </td><td>${uniqueAuthors.size} authors</td></tr>`;
    const uniquePublisherRow = `<tr><td>Number of publishers: </td><td>${uniquePublisher.size} publishers</td></tr>`;
    const numberOfPagesRow = `<tr><td>Number of book pages: </td><td>${numberOfPages} pages</td></tr>`;
    const overallValueRow = `<tr><td>Overall book value: </td><td>${overallValue.toFixed(
      2
    )} €</td></tr>`;

    table.innerHTML = `${numberOfBooksRow}${uniqueAuthorsRow}${uniquePublisherRow}${numberOfPagesRow}${overallValueRow}`;
    document.querySelector("main").appendChild(table);
  })
  .catch((error) => console.error(error));

function convertPriceToNumber(price) {
  return price ? +price.replace(/^./, "") : 0;
}

var xValues = ["Mon", "Tue", "Wed", "Whu", "Fri", "Sat"];
var yValues = [55, 49, 44, 24, 15, 77];
var barColors = [
  "#114446",
  "#114446",
  "#114446",
  "#114446",
  "#114446",
  "#114446",
];

new Chart("dailyVisitors", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Number of visitors per day",
    },
  },
});
