# Book Store REST API

A simple REST API for a Book Store using Node.js, Express, and MongoDB.

## Book Schema
- **title**: String (required)
- **author**: String (required)
- **price**: Number (required)
- **publishedDate**: Date (required)
- **id**: String (auto-generated UUID)

## Endpoints
- **GET /books** - List all books
- **POST /books** - Add a new book
- **PUT /books/:id** - Update a book
- **DELETE /books/:id** - Delete a book

## Prerequisites
- Node.js (v14 or later)
- MongoDB (running locally on port 27017)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/prajjwalmaur/book-store
   cd book-store-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   For development with auto-restart:
   ```bash
   npm run dev
   ```

## Usage
- The API will be available at `http://localhost:3000`.
- Use Postman or any API client to test the endpoints.

## Postman Collection
A Postman collection is provided in the `postman` folder. Import it into Postman to test the API endpoints.
