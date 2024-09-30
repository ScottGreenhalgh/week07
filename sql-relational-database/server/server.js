import express, { response } from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_URL,
});

app.get("/", function (request, response) {
  response.json("root route");
});

app.get("/books", async (request, response) => {
  console.log(request.query);
  try {
    if (request.query.include_genres) {
      const books = (
        await db.query(`SELECT books.title, genres.name
            FROM books
            INNER JOIN book_genres ON books.id = book_genres.book_id
            INNER JOIN genres ON book_genres.genre_id = genres.id
            GROUP BY books.title, books.author;`)
      ).rows;
      response.status(200).json(books);
    }
    const books = (await db.query("SELECT * FROM books")).rows;
    response.status(200).json(books);
  } catch (error) {
    response.status(500).json(`{${error.name}, ${error.message}`);
  }
});

app.post("/books", async (request, response) => {
  //const title = request.body.title // destructure this
  const { title, author, description, quote, release, img_url } = request.body;
  try {
    const result = await db.query(
      `INSERT INTO books (title, author, description, quote, released, img_url) VALUES ($1, $2, $3, $4, $5, $6)`,
      [title, author, description, quote, release, img_url]
    );
  } catch (error) {
    response.status(500).json(`{${error.name}, ${error.message}`);
  }
});

app.listen(8080, () => console.log("App running on port 8080"));
