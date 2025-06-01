const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const bookSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  publishedDate: { type: Date, required: true }
});

module.exports = mongoose.model('Book', bookSchema); 