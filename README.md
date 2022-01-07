<div align="center">

# IMDB Browser
An IMDB Based Project Made for Portfolio Purposes
</div>

## Information
This project allows you to search for movies and tv shows on IMDB and it saves the fetched data in the database for future use. Alongside this, it also allows users to upvote/downvote shows/movies and allow users to view their information.

## Code Structure
The project is structured as a mono-repo. Following are the repositories in the project:
- api: The api that is used to fetch the data.
- frontend: The react web app which utilizes the api.

## Technologies Used
API
- Deno (JavaScript Runtime)
- Oak (HTTP Server on Deno)
- MongoDB (Database)
- TypeScript (Code)

FRONTEND
- React (JavaScript Library)
- React Router (Routing)
- TailwindCSS (CSS Framework)
- Axios (HTTP Client)

## Documentation
API Endpoints
- `/movies` : Fetches all the movies from the database.
- `/movies/:id` : Fetches a specific movie from the database.
- `/movies/:id/upvote` : Upvotes a specific movie.
- `/movies/:id/downvote` : Downvotes a specific movie.
- `/search?name=:name?genre=:genre` : Searches for a movie by name from IMDB then saves it in the database and filter by genre (optinal).

Frontend Pages
- `/` : Homepage.
- `/movie/:id` : Page that gives more information about a movie.

## License
UNLICENSED