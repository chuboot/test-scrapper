const feedElement = document.querySelector("#feed");

fetch("http://localhost:8000/results")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((article) => {
      const title = `<div><h3>${article.title}</h3><a href="${article.url}"><p>${article.url}</p></a></div>`;
      feedElement.insertAdjacentHTML("beforeend", title);
    });
  });
