const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");

const app = express();

const url = "https://www.detik.com/";

app.use(cors());

app.get("/", function (req, res) {
  res.json("This is my web");
});

app.get("/results", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      //   console.log(html);
      const $ = cheerio.load(html);
      const articles = [];
      $(".media__title", html).each(function () {
        const title = $(this).text();
        const url = $(this).find("a").attr("href");
        articles.push({
          title,
          url,
        });
      });

      res.json(articles);
    })
    .catch((error) => console.log(error));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
