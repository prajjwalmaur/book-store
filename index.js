const express = require('express');
const mongoose = require('mongoose');
const bookController = require('./controllers/bookController');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bookstore', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/books', bookController.getAllBooks);
app.post('/books', bookController.addBook);
app.put('/books/:id', bookController.updateBook);
app.delete('/books/:id', bookController.deleteBook);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 